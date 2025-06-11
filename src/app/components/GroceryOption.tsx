import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import imageItemType from '../data/itemType'
import ItemCard from './ui/ItemCard'

export default function GroceryOption() {
  return (
    <div className='w-[80%] m-auto h-[48vh]'>
        <div className='flex justify-between items-center my-5'>
        <h5 className='font-bold text-2xl'>Shop groceries on Instamart</h5>
        <div className='flex justify-end gap-2 py-5'>
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
    <div className='flex overflow-x-auto gap-7'>
        {
        imageItemType.map((item, index) => (
            <ItemCard image={item.imageId} title={item.action.text} key={index}/>
        ))
        }
    </div>
    </div>
  )
}
