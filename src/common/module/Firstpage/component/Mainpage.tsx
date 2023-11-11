import Buttons from "@/common/component/element/Buttons";
import React from "react";

const Mainpage = () => {
  return (
    <div className="md:mt-40 mt-[-100px] relative z-[9] w-full pl-10 xl:pl-[100px]">
      <div className="flex justify-between">
        <div className=" w-[80%]">
          <h1 className="lg:text-7xl md:text-5xl text-3xl md:text-black text-white font-bold ">LIVE YOUR DAY WITH MUSIC</h1>
          <h2 className="text-lg mt-3  md:text-black text-white line-clamp-3">
            Welcome to our vibrant and exciting platform, your ultimate
            destination for all things live music!
          </h2>
          <Buttons className="mt-3 max-md:bg-white max-md:!text-black" href="" icon="" icons="" title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
