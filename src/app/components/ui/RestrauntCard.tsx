import Link from 'next/link'
import React from 'react'

export default function RestrauntCard({title, rating, location, image, cuisiness, id}: {title: string, rating: string, location: string, image: string, cuisiness: string[], id: string}) {
  return (
    <Link href={"/city/"+id}>
    <div className='w-[18vw] h-[40vh] overflow-hidden rounded-xl shrink-0 transition-all duration-200 transform hover:scale-95'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${image}`} alt={title} className='w-full h-40 object-cover rounded-md' />
            <h2 className='font-bold'>{title}</h2>
            <p className='text-gray-600'>{rating}</p>
            <p className='text-gray-500'>{cuisiness.join(', ')}</p>
            <p className='text-gray-500 uppercase'>{location}</p>
    </div>
    </Link>
  )
}