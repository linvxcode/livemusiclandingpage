'use client'
import Buttons from "@/common/component/element/Buttons";
import React from "react";
import { motion } from "framer-motion";

const Mainpage = () => {
  return (
    <div className="md:mt-40 mt-[-100px] relative z-[9] w-full pl-10 xl:pl-[100px]">
      <div className="flex justify-between">
        <motion.div className=" w-[80%]" 
        initial={{opacity: 0, translateY: 50}}
        whileInView={{opacity: 1, translateY: 0, transition: {type: 'spring', duration: 1.5}}}
        viewport={{once:true}}
        >
          <h1 className="lg:text-7xl md:text-5xl text-3xl md:text-black text-white font-bold ">LIVE YOUR DAY WITH MUSIC</h1>
          <h2 className="text-lg mt-3  md:text-black text-white line-clamp-3">
            Welcome to our vibrant and exciting platform, your ultimate
            destination for all things live music!
          </h2>
          <Buttons className="mt-3 max-md:bg-white max-md:!text-black" href="" icon="" icons="" title="Get Started" />
        </motion.div>
      </div>
    </div>
  );
};

export default Mainpage;
