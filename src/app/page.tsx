import React from 'react'
import HomeHeader from './components/HomeHeader'
import FoodOption from './components/FoodOption'

export default function page() {
  return (
    <div className='min-h-screen w-screen'>
      <HomeHeader />
      <FoodOption />
    </div>
  )
}
