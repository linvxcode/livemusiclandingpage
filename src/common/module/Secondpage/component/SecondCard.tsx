import React from "react";
import ElectricSvg from "./ElectricSvg";

const SecondCard = () => {
  return (
    <div className="h-auto w-[60%] md:w-[25%] md:px-10 md:py-10 px-3 py-5 rounded-3xl absolute bg-[#1E1E1E] md:bottom-[-90px] md:z-[9] bottom-[670px] left-[40px] md:left-[150px]">
      <div className="flex gap-1 items-center">
        <ElectricSvg />
        <h1 className="text-white text-2xl">Your Text Here</h1>
      </div>
      <div className="flex text-[#C9C9C9] text-sm">
        <h2 className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
      </div>
    </div>
  );
};

export default SecondCard;
