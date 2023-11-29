import Buttons from "@/common/component/element/Buttons";
import Layouts from "@/common/component/element/Layouts";
import React from "react";
import { BiBookReader } from "react-icons/bi";

const LeftText = () => {
  return (
    <div className="md:w-[60%] mt-[550px] md:mt-[150px] md:px-20 px-5">
      <Layouts delay={0.2}>
        <h1 className="md:text-7xl text-5xl w-[20%] font-bold text-[#009B47]">
          RELAX MUSIC
        </h1>
        <h2 className="leading-9 py-3 tracking-[0.1em] w-[100%] md:w-[70%] mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h2>
        <Buttons
          className="mt-3"
          href=""
          icon={<BiBookReader size={30} />}
          icons={<BiBookReader size={40} className="text-green-600" />}
          title="Read More"
        />
      </Layouts>
    </div>
  );
};

export default LeftText;
