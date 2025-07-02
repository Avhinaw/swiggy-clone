'use client'
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { GoArrowLeft } from 'react-icons/go';
// import { ArrowLeft, Search, Loader2 } from 'lucide-react';

export default function Page() {
  const id = useParams().id;
  const router = useRouter();
  const [restInfoData, setRestInfoData] = useState<any>(null);
  const [searchItem, setSearchItem] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const heroku = 'https://cors-anywhere.herokuapp.com/';
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.25050&lng=77.40650&restaurantId=${id}`;
        const response = await fetch(heroku + url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch restaurant data');
        }
        
        const data = await response.json();
        setRestInfoData(data.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load restaurant menu. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    if (id) {
      fetchData();
    }
  }, [id]);

  // Flatten and collect dish items
  const getAllDishes = () => {
    if (!restInfoData) return [];
    
    const menuCards = restInfoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const allDishes: any[] = [];
    
    menuCards.forEach((item: any) => {
      const card = item?.card?.card;
      const type = card?.['@type'];
      
      // Extract from itemCards (most common type)
      if (type === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') {
        card?.itemCards?.forEach((dish: any) => {
          if (dish.card?.info) {
            allDishes.push(dish.card.info);
          }
        });
      }
      
      // Extract from carousel (like Top Picks)
      if (type === 'type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel') {
        card?.carousel?.forEach((dish: any) => {
          if (dish?.dish?.info) {
            allDishes.push(dish.dish.info);
          }
        });
      }
      
      // Edge case: direct info in card (rare)
      if (card?.info) {
        allDishes.push(card.info);
      }
    });
    
    return allDishes;
  };

  // Filter based on searchItem (case-insensitive)
  const getFilteredDishes = () => {
    if (!searchItem.trim()) return []; // Don't show dishes if no search term
    
    const allDishes = getAllDishes();
    return allDishes.filter(dish =>
      dish?.name?.toLowerCase().includes(searchItem.toLowerCase()) ||
      dish?.description?.toLowerCase().includes(searchItem.toLowerCase())
    );
  };

  const handleBack = () => {
    router.back();
  };

  const filteredDishes = getFilteredDishes();
  const restaurantName = restInfoData?.cards[2]?.card?.card?.info?.name || 'Restaurant';

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2 text-gray-600">
          <span>Loading restaurant menu...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-[55%] m-auto my-5">
      <div className="relative flex items-center border-b border-gray-200 bg-white top-0 z-10">
        <button
          onClick={handleBack}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          aria-label="Go back"
        >
          <GoArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        
        <input
          className="flex-1 px-4 py-5 outline-none text-gray-700 placeholder-gray-500"
          type="text"
          placeholder={`Search in ${restaurantName}`}
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        
        <div className="p-3 flex-shrink-0">
          <CiSearch className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-5">
        {!searchItem.trim() ? (
          <div className="text-center mt-20">
            <CiSearch className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Start typing to search dishes</p>
            <p className="text-gray-400 text-sm mt-2">
              Search by dish name or description
            </p>
          </div>
        ) : filteredDishes.length > 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-gray-500 mb-4">
              Found {filteredDishes.length} dish{filteredDishes.length !== 1 ? 'es' : ''}
            </p>
            {filteredDishes.map((dish, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg text-gray-800 mb-1">
                      {dish.name}
                    </h2>
                    {dish.description && (
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {dish.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-green-600">
                        ₹{dish.price ? (dish.price / 100).toFixed(0) : 'N/A'}
                      </p>
                      {dish.ratings?.aggregatedRating?.rating && (
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="text-green-600 font-medium">
                            ⭐ {dish.ratings.aggregatedRating.rating}
                          </span>
                          <span className="ml-1">
                            ({dish.ratings.aggregatedRating.ratingCountV2})
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {dish.imageId && (
                    <div className="ml-4 flex-shrink-0">
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/w_96,h_96,c_fill,f_auto,q_auto/${dish.imageId}`}
                        alt={dish.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-20">
            <div className="text-gray-400 mb-4">
              <CiSearch className="h-16 w-16 mx-auto mb-4 opacity-50" />
            </div>
            <p className="text-gray-500 text-lg">No dishes found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>
    </div>
)}