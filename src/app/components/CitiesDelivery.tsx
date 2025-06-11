'use client'
import React, { useState } from 'react'
import CityCard from './ui/CityCard'
import cityFoodData from '../data/cityFoodType'
import cityGroceryType from '../data/cityGroceryType'
import { IoIosArrowDown } from "react-icons/io";

export default function CitiesDelivery() {
  const [showAllFood, setShowAllFood] = useState(false)
  const [showAllGrocery, setShowAllGrocery] = useState(false)

  const visibleFoodCities = showAllFood ? cityFoodData : cityFoodData.slice(0, 12)
  const visibleGroceryCities = showAllGrocery ? cityGroceryType : cityGroceryType.slice(0, 12)

  return (
    <div className='w-[80%] min-h-[50vh] m-auto'>
      
      {/* Food Delivery Section */}
      <h3 className='text-2xl font-bold mb-4'>Cities with food delivery</h3>
      <div className='grid grid-cols-4 gap-3'>
        {visibleFoodCities.map((city, index) => (
          <CityCard title={city.text} key={index} />
        ))}
      </div>
      {cityFoodData.length > 20 && (
        <button
          onClick={() => setShowAllFood(!showAllFood)}
          className='mt-4 text-yellow-600 font-bold border border-gray-300 px-3 py-4 rounded-lg'
        >
          {showAllFood ? 'Show Less' : 'Show More'}
        </button>
      )}

      {/* Grocery Delivery Section */}
      <h3 className='text-2xl font-bold mt-14 mb-4'>Cities with Grocery delivery</h3>
      <div className='grid grid-cols-4 gap-3'>
        {visibleGroceryCities.map((city, index) => (
          <CityCard title={city.text} key={index} />
        ))}
      </div>
      {cityGroceryType.length > 20 && (
        <button
          onClick={() => setShowAllGrocery(!showAllGrocery)}
          className='mt-4 text-yellow-600 font-bold border border-gray-300 px-5 py-4 rounded-lg'
        >
          {showAllGrocery ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}
