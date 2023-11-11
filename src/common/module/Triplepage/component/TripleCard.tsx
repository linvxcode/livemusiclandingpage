import React from 'react'
import ElectricSvg from '../../Secondpage/component/ElectricSvg'
import { TripleCardItem } from '@/common/constant/TripleCardItem'
import clsx from 'clsx'

const TripleCard = () => {
  return (
    <div className='flex max-md:hidden gap-5  px-10 z-[9] absolute  bottom-[-100px]'>
    {TripleCardItem.map((item, index) => (
    <div key={index} className={clsx(
        item.bg, 
        "h-auto w-[100%] px-10 py-10 rounded-3xl  border-[1px] border-neutral-400 ")}>
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
    </div>
  )
}

export default TripleCard
