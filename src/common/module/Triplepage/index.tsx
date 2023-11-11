import React from "react";
import LeftText from "./component/LeftText";
import RightImg from "./component/RightImg";
import TripleCard from "./component/TripleCard";

const Triplepage = () => {
  return (
    <div className="h-auto relative">
      <div className="flex justify-between ">
        <div className="md:w-[90%] justify-center relative rounded-r-[100px] flex overflow-hidden h-[120vh] md:h-screen bg-[#fff] ">
          <LeftText />
          <RightImg/>
        </div>
      </div>
      <TripleCard/>
    </div>
  );
};

export default Triplepage;
