import Image from "@/common/component/element/Image";
import React from "react";

const MainImg = () => {
  return (
    <div>
      <div className="w-[550px] justify-center flex items-center overflow-hidden h-screen bg-[#009B47] rounded-tl-[200px]">
        <div className="w-full">
            <Image src='/img/people.png' alt="People And Headphone" width={800} height={800} priority />
        </div>
      </div>
    </div>
  );
};

export default MainImg;
