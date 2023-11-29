import Layouts from "@/common/component/element/Layouts";
import React from "react";
import AnimateButton from "./AnimateButton";

const RightTextSecond = () => {
  return (
    <div className="flex flex-col mt-[150px] px-5 max-md:mb-32 md:w-[40%]">
      <Layouts delay={0.2}>
        <h1 className="md:text-7xl text-5xl md:w-[40%] font-bold">FREE SONG</h1>
        <h2 className="max-xl:w-[90%] text-[1rem] leading-9 py-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
          text ever since the 1500s,
        </h2>
      </Layouts>
      <AnimateButton/>
    </div>
  );
};

export default RightTextSecond;
