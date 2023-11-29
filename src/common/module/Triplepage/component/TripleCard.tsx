'use client'
import React from 'react'
import ElectricSvg from '../../Secondpage/component/ElectricSvg'
import { TripleCardItem } from '@/common/constant/TripleCardItem'
import clsx from 'clsx'
import { motion } from 'framer-motion'
const TripleCard = () => {
  return (
    <motion.div className='grid md:grid-cols-4 mb-10 relative max-md:mt-[300px] grid-cols-2 px-5 gap-5 no-scrollbar w-full md:px-10 z-[9] bottom-[100px] max-md:bottom-[-100px]'

    >
    {TripleCardItem.map((item, index) => (
    <motion.div key={index} className={clsx(
        item.bg, 
        "h-auto w-full md:px-10 px-3 py-10 rounded-3xl  border-[1px] border-neutral-400 ")}
        initial={{opacity: 0, scale: 0.10}}
        whileInView={{opacity: 1, scale: 1, transition: {type: "spring", duration: 1.5, delay: 0.10 * index}}}
        viewport={{once: true}}
        >
      <div className="flex gap-1 items-center">
        <ElectricSvg />
        <h1 className="text-white md:text-lg text-sm"> {item.title} </h1>
      </div>
      <div className="flex text-white md:text-sm text-xs">
        <h2 className="mt-3">
          {item.body}
        </h2>
      </div>
    </motion.div>
    ))}
    </motion.div>
  )
}

export default TripleCard
