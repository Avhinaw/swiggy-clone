import React from 'react'

export default function itemCard({image, title}: {image: string, title: string}) {
  return (
  
    <div className='w-40 shrink-0 text-center space-y-4'>
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${image}`} alt={title} className='w-40 object-cover' />
      <p className='text-xl font-bold text-[#02060cbf] w-35'>{title}</p>
      </div>
    
  )
}