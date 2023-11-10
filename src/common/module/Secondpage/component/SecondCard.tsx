import React from "react";
import ElectricSvg from "./ElectricSvg";

const SecondCard = () => {
  return (
    <div className="h-auto w-[27%] px-10 py-10 rounded-3xl absolute bg-neutral-800/95 bottom-[70px] left-[200px]">
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
