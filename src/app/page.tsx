import React from 'react'
import HomeHeader from './components/HomeHeader'
import FoodOption from './components/FoodOption'
import GroceryOption from './components/GroceryOption'
import DineOut from './components/DineOut'

export default function page() {
  return (
    <div className='min-h-screen w-screen'>
      <HomeHeader />
      <FoodOption />
      <GroceryOption />
      <DineOut />
    </div>
  )
}
