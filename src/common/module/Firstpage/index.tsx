import React from 'react'
import Mainpage from './component/Mainpage'
import MainImg from './component/MainImg'
import LayoutCard from '../Fiftpage/component/LayoutCard'

const Firstpage = () => {
  return (
    <div className='flex justify-center relative max-w-[1500px] '>
      <Mainpage/>
      <MainImg/>
      <LayoutCard/>
    </div>
  )
}

export default Firstpage