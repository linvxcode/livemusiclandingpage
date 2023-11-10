import React from 'react'
import { LayoutCardItem } from '@/common/constant/LayoutsCardItem'

const LayoutCard = () => {
  return (
    <div className='h-[90px] w-[60%] z-[9] rounded-3xl px-10 py-10 overflow-hidden flex justify-center items-center bg-[#1E1E1E] absolute bottom-[-30px]'>
      <div className='text-white flex items-center gap-5 '>
      <div className='h-[90px] w-[1px] bg-white'></div>
        {LayoutCardItem.map((item, index) => (
            <div key={index} className='text-white flex items-center gap-5 '>
            <h1>
                {item.title}
            </h1>
            <div className='h-[90px] w-[1px] bg-white'></div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default LayoutCard
