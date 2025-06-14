import React from 'react'

export default function Header() {
  return (
    <div className='w-screen px-34 h-20 m-auto flex items-center justify-between shadow-lg'>
        <div className='flex gap-12 font-bold items-center'>
        <img className='rounded-xl h-12 object-cover' src="./swiggy_mainLogo.jpg" alt="logo" />
        <h4>Other</h4>
        </div>

        <ul className='capitalize flex gap-12 text-lg font-semibold'>
            <li>swiggy corportate</li>
            <li>search</li>
            <li>offers</li>
            <li>help</li>
            <li>sign in</li>
            <li>cart</li>
        </ul>

    </div>
  )
}
