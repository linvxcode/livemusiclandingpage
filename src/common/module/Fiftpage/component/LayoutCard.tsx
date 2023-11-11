'use client'
import React from 'react'
import { LayoutCardItem } from '@/common/constant/LayoutsCardItem'
import { motion } from 'framer-motion'

const LayoutCard = () => {
  return (
    <div className='md:h-[90px] h-[50px] md:w-[60%] w-full z-[9] no-scrollbar md:rounded-3xl md:px-10 py-10 overflow-x-scroll overflow-y-hidden flex justify-center items-center bg-[#1E1E1E] absolute bottom-[-30px]'>
      <div className='text-white flex items-center gap-5 justify-center'>
      <div className='h-[90px] w-[1px] bg-white'></div>
        {LayoutCardItem.map((item, index) => (
            <motion.div key={index} className='text-white flex items-center gap-5 justify-center px-1'
            initial={{opacity: 0, translateY: 50}}
            whileInView={{opacity: 1, translateY: 0, transition: {type: 'spring', duration: 1.5, delay: index * 0.3}}}
            viewport={{once: true}}
            >
            <h1 className='md:text-lg text-sm'>
                {item.title}
            </h1>
            <div className='h-[90px] w-[1px] bg-white'></div>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default LayoutCard
