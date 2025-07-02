'use client'
import DealOptions from '@/app/components/DealOptions';
import SemmerEffect from '@/app/components/layout/SemmerEffect';
import Menu from '@/app/components/Menu';
import RestrauntInfoCard from '@/app/components/ui/RestrauntInfoCard';
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function RestaurantPage() {
    const { id } = useParams();
    const router = useRouter();
    const [restInfoData, setRestInfoData] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const heroku = "https://cors-anywhere.herokuapp.com/";
                const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.25050&lng=77.40650&restaurantId=${id}`;
                const response = await fetch(heroku + url);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch restaurant data');
                }
                
                const data = await response.json();
                console.log(data);
                setRestInfoData(data.data);
            } catch (err) {
                console.error('Error fetching restaurant data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        if (id) {
            fetchData();
        }
    }, [id]);

    const handleSearchClick = () => {
        router.push(`/city/${id}/search`);
    }

    const handleFilterToggle = (type) => {
        setSelectedType(selectedType === type ? null : type);
    }

    if (loading) {
        return <SemmerEffect />
    }

    if (error) {
        return (
            <div className="w-full max-w-4xl mx-auto my-10 p-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <h2 className="text-xl font-semibold text-red-800 mb-2">Error Loading Restaurant</h2>
                    <p className="text-red-600 mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    if (!restInfoData) {
        return (
            <div className="w-full max-w-4xl mx-auto my-10 p-6 text-center">
                <p className="text-gray-600">No restaurant data found</p>
            </div>
        )
    }

    const restaurantInfo = restInfoData?.cards?.[2]?.card?.card?.info;
    const menuCards = restInfoData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const dealInfo = restaurantInfo?.aggregatedDiscountInfo?.descriptionList || [];

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            {/* Restaurant Header */}
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {restaurantInfo?.name || 'Restaurant Name'}
                </h1>
                <div className="h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full w-20"></div>
            </div>

            {/* Restaurant Info Card */}
            <div className="mb-8">
                <RestrauntInfoCard 
                    rating={restaurantInfo?.avgRating} 
                    costForTwo={restaurantInfo?.costForTwo} 
                    cuisines={restaurantInfo?.cuisines} 
                    location={restaurantInfo?.locality} 
                    minTime={restaurantInfo?.sla?.minDeliveryTime} 
                    maxTime={restaurantInfo?.sla?.maxDeliveryTime} 
                />
            </div>

            {/* Deal Options */}
            {dealInfo.length > 0 && (
                <div className="mb-8">
                    <DealOptions restInfoDataAll={dealInfo} />
                </div>
            )}

            {/* Search and Filter Section */}
            <div className="mb-8 space-y-4">
                {/* Search Button */}
                <div 
                    className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 
                             text-gray-700 font-semibold rounded-xl w-full p-4 text-center cursor-pointer 
                             transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md
                             flex items-center justify-center gap-2" 
                    onClick={handleSearchClick}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search for dishes
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                    <button 
                        className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm
                                   border-2 flex items-center gap-2 hover:shadow-md
                                   ${selectedType === "veg" 
                                     ? 'bg-green-500 text-white border-green-500 shadow-green-200' 
                                     : 'bg-white text-gray-700 border-gray-200 hover:border-green-300'
                                   }`} 
                        onClick={() => handleFilterToggle("veg")}
                    >
                        <div className="w-3 h-3 border border-green-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        Veg Only
                    </button>
                    
                    <button 
                        className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm
                                   border-2 flex items-center gap-2 hover:shadow-md
                                   ${selectedType === "nonveg" 
                                     ? 'bg-red-500 text-white border-red-500 shadow-red-200' 
                                     : 'bg-white text-gray-700 border-gray-200 hover:border-red-300'
                                   }`} 
                        onClick={() => handleFilterToggle("nonveg")}
                    >
                        <div className="w-3 h-3 border border-red-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-500"></div>
                        </div>
                        Non-Veg Only
                    </button>

                    {selectedType && (
                        <button 
                            className="px-4 py-3 rounded-xl font-medium text-gray-600 hover:text-gray-800
                                     bg-gray-100 hover:bg-gray-200 transition-all duration-200 border-2 border-gray-200"
                            onClick={() => setSelectedType(null)}
                        >
                            Clear Filter
                        </button>
                    )}
                </div>

                {/* Active Filter Indicator */}
                {selectedType && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-blue-800 text-sm font-medium">
                            Showing {selectedType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} items only
                        </p>
                    </div>
                )}
            </div>

            {/* Menu Section */}
            <div className="mb-8">
                <Menu 
                    menuData={menuCards} 
                    foodTypeSelected={selectedType} 
                />
            </div>
        </div>
    )
}