import React from 'react';

export default function DineCard({
  title,
  rating,
  foodType,
  location,
  image,
  costForTwo,
  distance,
  offer,
  dealCategory,
}: {
  title: string;
  rating: string;
  foodType: string[];
  location: string;
  image: string;
  costForTwo: string;
  distance: string;
  offer: string | undefined;
  dealCategory: string | undefined;
}) {
  return (
    <div className="bg-white h-[55vh] w-[22vw] overflow-hidden shrink-0 rounded-2xl shadow-lg">
      <div
        className="h-[55%] bg-cover bg-center flex justify-between items-end p-2"
        style={{
          backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${image})`,
        }}
      >
        <h3 className="font-bold text-lg text-white bg-[#1ba470] px-2 rounded-lg">{title}</h3>
        <p className="text-sm text-white rounded-lg p-1 bg-[#1ba470]">⭐ {rating}</p>
      </div>
      <div className='p-2'>
        <div className='flex justify-between'>
        <p className="text-xs text-gray-700 mt-1">{foodType.join(', ')}</p>
        <p className="text-xs text-gray-700 mt-1">{costForTwo}</p>
        </div>
        <div className='flex justify-between mb-3'>
        <p className="text-xs text-gray-700 mt-1">{location}</p>
        <p className="text-xs text-gray-700 mt-1">{distance}</p>
        </div>
        <div className='bg-gray-200 w-24 h-5 flex items-center justify-center rounded-xl text-xs text-gray-600'>Table booking</div>
      <div className='bg-[#1ba470] text-white my-3 p-2 rounded-lg text-sm font-bold'>{offer} on {dealCategory}</div>
      <div className='text-[#088b5b] bg-[#c8f9e5] p-2 rounded-lg text-sm'>Up to 10% off on bank offers</div>
      </div>
    </div>
  );
}
