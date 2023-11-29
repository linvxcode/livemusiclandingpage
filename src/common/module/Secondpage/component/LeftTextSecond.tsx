import React from "react";
import TranlateX from "@/common/component/element/TranlateX";

const LeftTextSecond = () => {
  return (
    <div className="md:w-[40%] w-[50%] justify-center flex overflow-hidden h-[90vh] bg-[#009B47] ">
      <div className="w-full max-md:hidden mt-[110px] relative right-[70px]">
        <TranlateX>
          <h1 className="md:text-7xl text-5xl font-bold text-white">
            LIVE YOUR DAY WITH MUSIC
          </h1>
        </TranlateX>
      </div>
    </div>
  );
};

export default LeftTextSecond;
