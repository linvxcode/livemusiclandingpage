import React from 'react'
import { LayoutCardItem } from '@/common/constant/LayoutsCardItem'

const LayoutCard = () => {
  return (
    <div className='md:h-[90px] h-[50px] md:w-[60%] w-full z-[9] no-scrollbar md:rounded-3xl md:px-10 py-10 overflow-x-scroll overflow-y-hidden flex justify-center items-center bg-[#1E1E1E] absolute bottom-[-30px]'>
      <div className='text-white flex items-center gap-5 justify-center'>
      <div className='h-[90px] w-[1px] bg-white'></div>
        {LayoutCardItem.map((item, index) => (
            <div key={index} className='text-white flex items-center gap-5 justify-center px-1'>
            <h1 className='md:text-lg text-sm'>
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
