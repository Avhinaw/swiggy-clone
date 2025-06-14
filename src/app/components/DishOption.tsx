import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import FoodCard from './ui/FoodCard'

export default function DishOption({DishData}: {DishData: object[]}) {
  return (
    <div className='w-[80%] h-[40vh] m-auto mt-5'>
        <div className='flex justify-between gap-2'>
          <h3 className='font-bold text-xl'>What' on your mind</h3>
          <div className='flex justify-end gap-2'>
          <button
            className='bg-[#02060c26] w-8 h-8 rounded-full flex items-center justify-center text-xl hover:bg-[#02060c40] transition-colors'
            aria-label="Scroll left"
          >
            <IoIosArrowRoundBack />
          </button>
          <button
            className='bg-[#02060c26] w-8 h-8 rounded-full flex items-center justify-center text-xl hover:bg-[#02060c40] transition-colors'
            aria-label="Scroll right"
          >
            <IoIosArrowRoundForward />
          </button>
          </div>
        </div>

    <div className="overflow-x-auto flex gap-5">
          {DishData.map((item, index) => (
              <FoodCard image={item.imageId} title={item.action.text} key={index} />
          ))}
      </div>
    </div>
  )
}