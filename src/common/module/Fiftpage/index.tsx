import React from "react";
import LeftTextFifth from "./component/LeftText";
import RightImage from "./component/RightImage";

const Fifthpage = () => {
  return (
    <div className="h-screen bg-[#009B47]">
      <div className="flex justify-between ">
        <div className="w-[60%] justify-center relative rounded-r-[100px] flex  h-screen bg-[#1E1E1E] ">
          <LeftTextFifth />
          <RightImage />
          
        </div>
      </div>
    </div>
  );
};

export default Fifthpage;