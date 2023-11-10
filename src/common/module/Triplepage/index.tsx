import React from "react";
import LeftText from "./component/LeftText";
import RightImg from "./component/RightImg";
import TripleCard from "./component/TripleCard";

const Triplepage = () => {
  return (
    <div className="h-screen relative">
      <div className="flex justify-between ">
        <div className="w-[90%] justify-center relative rounded-r-[100px] flex overflow-hidden h-screen bg-[#fff] ">
          <LeftText />
          <RightImg/>
        </div>
      </div>
      <TripleCard/>
    </div>
  );
};

export default Triplepage;
