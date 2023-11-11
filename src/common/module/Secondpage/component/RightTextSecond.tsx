import Buttons from "@/common/component/element/Buttons";
import React from "react";

const RightTextSecond = () => {
  return (
    <div className="flex flex-col mt-[150px] px-5 max-md:mb-5 md:w-[40%]">
      <h1 className="text-6xl font-bold">FREE SONG</h1>
      <h2 className="max-xl:w-[90%]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text
        ever since the 1500s,
      </h2>
      <Buttons
        className="w-[150px] mt-3"
        href=""
        icon=""
        icons=""
        title="Read More"
      />
    </div>
  );
};

export default RightTextSecond;
