import React from "react";
import LeftText from "./component/LeftText";
import RightImg from "./component/RightImg";
import TripleCard from "./component/TripleCard";

const Triplepage = () => {
  return (
    <div className="md:h-[110vh] h-[150vh]  relative">
      <div className="flex justify-between ">
        <div className="md:w-[90%]  relative rounded-r-[100px] md:overflow-hidden flex  h-[66vh] md:h-screen bg-[#fff] ">
          <LeftText />
          <RightImg/>
        </div>
      </div>
      <TripleCard/>
    </div>
  );
};

export default Triplepage;
