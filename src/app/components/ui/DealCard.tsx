import React from 'react'

export default function DealCard({title, discountType}: {title: string, discountType: string}) {
  return (
    <div className='border border-gray-400 p-5 rounded-xl'>
        
        <div>
            {title}
            {discountType}
        </div>
    </div>
  )
}
