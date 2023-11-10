import Image from '@/common/component/element/Image'
import React from 'react'

const SecondImageLeft = () => {
  return (
    <div className="lbg w-[550px] mt-[139px] flex justify-center overflow-hidden absolute left-0">
    <Image loading='lazy' src="/img/image.png" alt="people" width={800} height={800} />
  </div>
  )
}

export default SecondImageLeft
