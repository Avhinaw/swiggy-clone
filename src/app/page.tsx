import React from 'react'
import HomeHeader from './components/HomeHeader'
import FoodOption from './components/FoodOption'
import GroceryOption from './components/GroceryOption'
import DineOut from './components/DineOut'
import CitiesDelivery from './components/CitiesDelivery'

export default function page() {
  return (
    <div className='min-h-screen w-screen'>
      <HomeHeader />
      <FoodOption />
      <GroceryOption />
      <DineOut />
      <img className='my-20 h-[40vh] object-cover' src="./App_download_banner.png" alt="Swiggy download" />
      <CitiesDelivery />
    </div>
  )
}
