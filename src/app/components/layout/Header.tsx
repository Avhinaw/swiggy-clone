import React from 'react'

export default function Header() {
  return (
    <div className='w-screen px-32 h-28 m-auto flex justify-between shadow-lg'>
        <div>
        <img src="favicon.png" alt="logo" />
        <h4>Other</h4>
        </div>

        <ul className='capitalize flex gap-4'>
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
