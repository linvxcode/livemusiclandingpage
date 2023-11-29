import Image from "@/common/component/element/Image";
import React from "react";

const MainImg = () => {
  return (
    <div>
      <div className="md:w-[550px] w-full max-md:absolute max-md:left-0 max-md:top-[100px] justify-center flex items-center overflow-hidden h-auto md:h-screen bg-[#009B47] rounded-tl-[100px] md:rounded-tl-[200px]">
        <div className="w-full relative max-md:top-[100px]">
            <Image src='/img/people.png' alt="People And Headphone" width={800} height={800} priority />
        </div>
      </div>
    </div>
  );
};

export default MainImg;
