import React from 'react'

export default function CityCard({title}: {title: string}) {
  return (
    <div className='border border-gray-300 py-4 px-3 rounded-lg flex justify-center items-center'>
        <p className='w-58 text-center'>{title}</p>
    </div>
  )
}