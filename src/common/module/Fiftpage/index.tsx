import React from "react";
import LeftTextFifth from "./component/LeftText";
import RightImage from "./component/RightImage";

const Fifthpage = () => {
  return (
    <div className="md:h-screen h-[160vh] bg-[#009B47]">
      <div className="flex  justify-between ">
        <div className="md:w-[60%] w-[90%] justify-center relative rounded-r-[100px] flex  md:h-screen bg-[#1E1E1E] ">
          <LeftTextFifth />
          <RightImage />
          
        </div>
      </div>
    </div>
  );
};

export default Fifthpage;
