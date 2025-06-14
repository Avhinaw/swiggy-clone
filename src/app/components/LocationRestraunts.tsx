'use client'
import React, { useEffect, useState } from 'react'
import RestrauntCard from './ui/RestrauntCard';

export default function LocationRestraunts({restData}: {restData: object[]}) {
    
  return (
    <div className='grid grid-cols-4 gap-5 w-[80%] m-auto'>
        {restData.map((item, index) => (
            <RestrauntCard title={item.info.name} rating={item.info.avgRating} location={item.info.areaName} image={item.info.cloudinaryImageId} cuisiness={item.info.cuisines} id={item.info.id} key={index} />
        ))}

    </div>
  )
}
