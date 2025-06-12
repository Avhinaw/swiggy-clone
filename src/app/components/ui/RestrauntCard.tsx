import React from 'react'

export default function RestrauntCard({title, rating, location, image, cuisiness}: {title: string, rating: string, location: string, image: string, cuisiness: string[]}) {
  return (
    <div className='w-[20vw] h-[40vh] rounded-lg shrink-0'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${image}`} alt={title} className='w-full h-40 object-cover rounded-md' />
            <h2 className='font-bold'>{title}</h2>
            <p className='text-gray-600'>{rating}</p>
            <p className='text-gray-500'>{cuisiness.join(', ')}</p>
            <p className='text-gray-500 uppercase'>{location}</p>
    </div>
  )
}
