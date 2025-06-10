import React from 'react'

export default function FoodCard({image, title}: {image: string, title: string}) {
  return (
    <>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${image}`} alt="title" className='w-45 object-cover' />
    </>
  )
}
