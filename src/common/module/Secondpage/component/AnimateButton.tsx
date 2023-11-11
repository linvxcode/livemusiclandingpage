'use client'
import Buttons from "@/common/component/element/Buttons";
import React from "react";
import { motion } from "framer-motion";
import {BiBookReader} from 'react-icons/bi'

const AnimateButton = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1, transition: {duration: 1}}}
    viewport={{once: true}}
    >
      <Buttons
        className="w-[150px] mt-3"
        href=""
        icon={<BiBookReader size={30} />}
        icons={<BiBookReader size={40} className="text-green-600" />}
        title="Read More"
      />
    </motion.div>
  );
};

export default AnimateButton;
