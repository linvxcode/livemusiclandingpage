'use client'
import React from 'react'
import { LayoutCardItem } from '@/common/constant/LayoutsCardItem'
import { motion } from 'framer-motion'
import Sliders from '../../Firstpage/component/Slider'
import clsx from 'clsx'

const LayoutCard = ({className}: any) => {
  return (
    <div className={clsx(className,`md:h-[90px] h-[70px] md:w-[80%] w-[95%] gap-5 z-[9] justify-items-center overflow-hidden no-scrollbar rounded-3xl px-10 py-2 md:py-10 flex-row flex-nowrap flex justify-center items-center bg-[#1E1E1E] absolute bottom-[-50px]`)}>
      <div className='text-white  flex items-center md:px-20 px-2  justify-center'>
      <div className='h-[50px] w-[1px] bg-white'></div>
        {LayoutCardItem.map((item, index) => (
            <motion.div key={index} className='text-white flex items-center px-2 md:px-10 justify-center '
            initial={{opacity: 0, translateY: 50}}
            whileInView={{opacity: 1, translateY: 0, transition: {type: 'spring', duration: 1.5, delay: index * 0.3}}}
            viewport={{once: true}}
            >
            <h1 className='md:text-lg text-[10px] font-bold w-full'>
                {item.title}
            </h1>
            <div className='h-[50px] relative md:left-[40px] left-[5px] w-[1px] bg-white'></div>
            </motion.div>
        ))}
      </div>
      {/* <div className='max-md:flex hidden w-full'>
        <Sliders/>
      </div> */}
    </div>
  )
}

export default LayoutCard
