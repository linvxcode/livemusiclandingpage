import Image from '@/common/component/element/Image'
import React from 'react'

const RightImage = () => {
  return (
    <div className='max-md:absolute max-md:top-[400px] max-md:left-[60px] min-[450px]:pl-[120px] '>
    <div className="w-[300px] max-[450px]:!w-[200px] top-[400px] flex justify-center  absolute max-md:right-[-200px]">
      <Image
        src="/img/image2.png"
        loading="lazy"
        alt="people"
        width={800}
        height={800}
        className="relative top-[-130px]"
      />
    </div>
    <div className="w-[200px] max-[450px]:!w-[100px] top-[340px] min-[450px]:top-[250px] flex justify-center max-md:right-[-240px] right-[-400px] absolute ">
      <Image
        src="/img/image4.png"
        loading="lazy"
        alt="people"
        width={800}
        height={800}
        className="relative top-[-130px]"
      />
    </div>
    </div>
  )
}

export default RightImage
