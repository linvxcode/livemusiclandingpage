import Image from "@/common/component/element/Image";
import React from "react";

const MainImg = () => {
  return (
    <div>
      <div className="md:w-[550px] max-md:absolute max-md:top-0 justify-center flex items-center overflow-hidden h-screen bg-[#009B47] rounded-tl-[360px] md:rounded-tl-[200px]">
        <div className="w-full relative max-md:top-[260px]">
            <Image src='/img/people.png' alt="People And Headphone" width={800} height={800} priority />
        </div>
      </div>
    </div>
  );
};

export default MainImg;
