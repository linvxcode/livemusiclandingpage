import React from 'react'
import Mainpage from './component/Mainpage'
import MainImg from './component/MainImg'
import LayoutCard from '../Fiftpage/component/LayoutCard'

const Firstpage = () => {
  return (
    <div className='flex md:h-screen h-auto justify-center items-center max-md:flex-col relative '>
      <Mainpage/>
      <MainImg/>
      <LayoutCard/>
    </div>
  )
}

export default Firstpage
