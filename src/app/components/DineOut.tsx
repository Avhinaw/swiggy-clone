import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import Dineinfo from '../data/dineType'
import DineCard from './ui/DineCard'

export default function DineOut() {
  return (
    <div className='w-[80%] h-[70vh] m-auto'>
        <div className='flex justify-between items-center mt-14 mb-5'>
        <h5 className='font-bold text-2xl'>Discover best restaurants on Dineout</h5>
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
    <div className='flex overflow-x-auto gap-4'>
      {
        Dineinfo.map((item, index) => (
          <DineCard title={item.info.name} rating={item.info.rating.value} foodType={item.info.cuisines} location={item.info.locationInfo.formattedAddress} image={item.info.mediaFiles[0].url} costForTwo={item.info.costForTwo} distance={item.info.locationInfo.distanceString} offer={item.info.offerInfoV2.otherOffers?.offers[0].header} dealCategory={item.info.offerInfoV2.otherOffers?.offers[0].dealCategory} key={index} />
        ))
      }
      </div>
    </div>
  )
}