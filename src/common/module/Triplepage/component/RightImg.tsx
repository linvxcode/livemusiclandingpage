import Image from "@/common/component/element/Image";
import React from "react";

const RightImg = () => {
  return (
    <div className=" md:w-[500px] rounded-tl-[200px] mt-[90px] md:mt-[130px] flex justify-center  absolute right-0">
      <Image
        src="/img/image3.png"
        loading="lazy"
        alt="people"
        width={800}
        height={800}
        className="relative top-[-130px] rounded-br-[100px]"
      />
    </div>
  );
};

export default RightImg;
