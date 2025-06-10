'use client';
import React from 'react';
import FoodCard from './ui/FoodCard';
import info from '../data/foodType';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function FoodOption() {
  // Split the info into two rows (adjust as needed)
  const row1 = info.slice(0, Math.ceil(info.length / 2));
  const row2 = info.slice(Math.ceil(info.length / 2));

  return (
    <div className='w-[85%] h-[70vh] m-auto mt-40'>
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

    <div className="overflow-x-auto overflow-y-hidden">
      <div className="inline-grid grid-rows-2 grid-flow-col auto-cols-[minmax(194px,1fr)]">
        <div className="contents">
          {row1.map((item, index) => (
            <div key={`row1-${index}`} className="h-full">
              <FoodCard image={item.imageId} title={item.action.text} />
            </div>
          ))}
        </div>
        
        <div className="contents">
          {row2.map((item, index) => (
            <div key={`row2-${index}`} className="h-full">
              <FoodCard image={item.imageId} title={item.action.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}