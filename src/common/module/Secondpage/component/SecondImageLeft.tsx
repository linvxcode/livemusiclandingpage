import Image from '@/common/component/element/Image'
import React from 'react'

const SecondImageLeft = () => {
  return (
    <div className="md:w-[40%] sm:w-[60%] md:mt-[199px] sm:mt-[100px] mt-[100px] flex justify-center  absolute md:left-[150px] sm:left-[100px] left-0">
    <Image loading='lazy' src="/img/image.png" alt="people" width={800} height={800} />
  </div>
  )
}

export default SecondImageLeft
