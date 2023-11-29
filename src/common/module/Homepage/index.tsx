import React from 'react'
import Firstpage from '../Firstpage'
import Secondpage from '../Secondpage'
import Triplepage from '../Triplepage'
import Fifthpage from '../Fiftpage'
import Footer from '../Footer'

const Homepage = () => {
  return (
    <div className='max-w-[1500px]'>
      <Firstpage />
      <Secondpage/>
      <Triplepage/>
      <Fifthpage/>
      <Footer/>
    </div>
  )
}

export default Homepage
