import React from "react";
import ElectricSvg from "./ElectricSvg";

const SecondCard = () => {
  return (
    <div className="h-auto w-[60%] md:w-[27%] md:px-10 md:py-10 px-5 py-5 rounded-3xl absolute bg-neutral-800 md:bottom-[70px] bottom-[570px] left-[40px] md:left-[200px]">
      <div className="flex gap-1 items-center">
        <ElectricSvg />
        <h1 className="text-white">Your Text Here</h1>
      </div>
      <div className="flex text-white">
        <h2 className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
      </div>
    </div>
  );
};

export default SecondCard;
