import React from "react";
import LeftTextFifth from "./component/LeftText";
import RightImage from "./component/RightImage";
import LayoutCard from "./component/LayoutCard";

const Fifthpage = () => {
  return (
    <div className="md:h-screen relative max-md:h-[160vh] mb-20 max-md:mt-[200px] max-[450px]:h-[130vh]">
      <div className="flex  justify-between ">
        <div className="md:w-[60%] w-[90%] justify-center relative rounded-r-[100px] flex  md:h-screen ">
          <LeftTextFifth />
          <RightImage />
        </div>
      </div>
          <LayoutCard className="!bottom-[-90px]  !w-full !rounded-none" />
    </div>
  );
};

export default Fifthpage;
