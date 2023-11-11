'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface LayoutsProps {
    children: ReactNode;
}

const TranlateX = ({children}: LayoutsProps) => {
  return (
    <motion.div 
    initial={{opacity: 0, translateX: -50}}
    whileInView={{opacity:1, translateX: 0, transition: {type: 'spring', duration: 1.5}}}
    viewport={{once: true}}
    >
      {children}
    </motion.div>
  )
}

export default TranlateX
