import Buttons from "@/common/component/element/Buttons";
import React from "react";

const Mainpage = () => {
  return (
    <div className="mt-40 w-full pl-10 xl:pl-[100px]">
      <div className="flex justify-between">
        <div className=" w-[80%]">
          <h1 className="lg:text-7xl font-bold">LIVE YOUR DAY WITH MUSIC</h1>
          <h2 className="text-lg mt-3">
            Welcome to our vibrant and exciting platform, your ultimate
            destination for all things live music!
          </h2>
          <Buttons className="mt-3" href="" icon="" icons="" title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
