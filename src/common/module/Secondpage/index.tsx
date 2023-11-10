import React from "react";
import LeftTextSecond from "./component/LeftTextSecond";
import RightTextSecond from "./component/RightTextSecond";
import SecondImageLeft from "./component/SecondImageLeft";
import SecondCard from "./component/SecondCard";

const Secondpage = () => {
  return (
    <div className="h-screen relative">
      <div className="flex justify-between ">
        <LeftTextSecond/>
        <RightTextSecond/>
        <SecondImageLeft/>
        <SecondCard/>
      </div>
    </div>
  );
};

export default Secondpage;
