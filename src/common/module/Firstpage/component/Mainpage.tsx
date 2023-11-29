"use client";
import Buttons from "@/common/component/element/Buttons";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineWidgets } from "react-icons/md";

const Mainpage = () => {
  return (
    <div className="md:mt-5 mt-[45rem] max-md:mb-10 relative z-[9] w-full pl-10 xl:pl-[80px]">
      <div className="flex justify-between">
        <motion.div
          className=" md:w-[80%]"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: { type: "spring", duration: 1.5 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-7xl text-5xl  text-black font-bold ">
            <span className="text-[#009B47]">LIVE YOUR DAY</span> WITH MUSIC
          </h1>
          <h2 className="text-[1.05rem] leading-[39px] mt-3 text-black line-clamp-3 md:line-clamp-none">
            Welcome to our vibrant and exciting platform, your ultimate
            destination for all things live music!,Immerse yourself in a world
            where the pulsating rhythm of live music fuels the heart of our
            vibrant platform.
          </h2>
          <Buttons
            className="mt-3 max-md:bg-[#1E1E1E] "
            href=""
            icon={<MdOutlineWidgets size={30} />}
            icons={
              <MdOutlineWidgets
                className="text-[#1E1E1E] md:text-green-600"
                size={40}
              />
            }
            title="Get Started"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Mainpage;
