import Image from '@/common/component/element/Image'
import React from 'react'

const RightImage = () => {
  return (
    <>
    <div className="w-[300px]  top-[400px] flex justify-center  absolute right-[-200px]">
      <Image
        src="/img/image2.png"
        loading="lazy"
        alt="people"
        width={800}
        height={800}
        className="relative top-[-130px]"
      />
    </div>
    <div className="w-[200px]  top-[250px] flex justify-center  absolute right-[-300px]">
      <Image
        src="/img/image4.png"
        loading="lazy"
        alt="people"
        width={800}
        height={800}
        className="relative top-[-130px]"
      />
    </div>
    </>
  )
}

export default RightImage
