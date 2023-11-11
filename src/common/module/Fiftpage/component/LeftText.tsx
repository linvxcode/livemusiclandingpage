import Buttons from "@/common/component/element/Buttons";
import Layouts from "@/common/component/element/Layouts";
import React from "react";

const LeftTextFifth = () => {
  return (
    <div className="w-full mt-[180px] max-lg:pb-10 px-10">
      <Layouts delay={1}>
        <h1 className="md:text-6xl text-5xl md:w-[70%] font-bold text-white">
          LIVE YOUR DAY WITH MUSIC
        </h1>
        <h2 className="md:w-[70%] text-white mt-3 line-clamp-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
          text ever since the 1500s,
        </h2>
        <Buttons className="mt-3" href="" icon="" icons="" title="Read More" />
      </Layouts>
    </div>
  );
};

export default LeftTextFifth;
