import Link from 'next/link'
import React from 'react'
export default function HomeHeader() {
  return (
    <div className='bg-[#ff5200] text-white h-screen'>
        <div className='h-20 px-36 py-12 flex justify-between items-center'>
            <img src="./Swiggy_logo.png" alt="swiggy" className='w-40' />
            <div className='flex gap-7 font-bold items-center'>
                <h3 className='capitalize cursor-pointer'>swiggy corporate</h3>
                <h3 className='cursor-pointer'>Partner with us</h3>
                <button className='px-6 py-4 border rounded-2xl cursor-pointer'>Get the App</button>
                <button className='bg-black px-10 py-4 rounded-xl cursor-pointer'>Sign in</button>
            </div>
        </div>
        <div className='relative pt-20 w-full h-[40%]'>
            <h1 className='text-5xl font-bold text-center max-w-[55%] container m-auto'>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
            <img src="./Veggies_new.png" alt="veggies" className='absolute w-64 top-0 left-0' />
            <img src="./Sushi_replace.png" alt="sushi" className='absolute w-64 top-0  right-0' />
            <div className='max-w-[70%] pl-20 pr-10 m-auto py-10 text-black font-bold space-x-4'>
                <input className='bg-white px-4 w-[38%] max-w-[40%] py-4 rounded-2xl' type="text" name="" id="" placeholder='Enter your delivery location' />
                <input className='bg-white px-4 w-[50%] max-w-[50%] py-4 rounded-2xl' type="text" name="" id="" placeholder='Search for restaurant, item or more' />
            </div>
        </div>
        <div className='flex items-center justify-center pt-2'>
            <Link className='h-[30%] w-[40%] object-cover' href="/restaurants">
            <img src="./food_service_card.png" alt="Food Delivery" />
            </Link>
            <img className='h-[30%] w-[40%] object-cover' src="./dine_service_card.png" alt="Dine Out" />
        </div>
    </div>
  )
}
