'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface LayoutsProps {
    children: ReactNode;
    delay: number;
}

const Layouts = ({children, delay}: LayoutsProps) => {
  return (
    <motion.div 
    initial={{opacity: 0, translateY: 50}}
    whileInView={{opacity:1, translateY: 0, transition: {type: 'spring', duration: 1.5, delay:delay}}}
    viewport={{once: true}}
    >
      {children}
    </motion.div>
  )
}

export default Layouts
