'use client'
import React from 'react'
import ElectricSvg from '../../Secondpage/component/ElectricSvg'
import { TripleCardItem } from '@/common/constant/TripleCardItem'
import clsx from 'clsx'
import { motion } from 'framer-motion'
const TripleCard = () => {
  return (
    <motion.div className='grid grid-cols-4 overflow-x-scroll gap-[320px] no-scrollbar w-full md:px-10 z-[9] absolute  bottom-[-100px]'
    initial={{translateX: -100}}
    whileInView={{translateX: -5, transition: {type: "spring", duration: 1.5}}}
    viewport={{once: true}}
    >
    {TripleCardItem.map((item, index) => (
    <div key={index} className={clsx(
        item.bg, 
        "h-auto w-[300px] px-10 py-10 rounded-3xl  border-[1px] border-neutral-400 ")}>
      <div className="flex gap-1 items-center">
        <ElectricSvg />
        <h1 className="text-white"> {item.title} </h1>
      </div>
      <div className="flex text-white">
        <h2 className="mt-3">
          {item.body}
        </h2>
      </div>
    </div>
    ))}
    </motion.div>
  )
}

export default TripleCard
