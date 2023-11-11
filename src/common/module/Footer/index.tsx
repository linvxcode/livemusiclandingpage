import React from "react";

const Footer = () => {
  return (
    <div className="h-auto flex md:justify-center justify-start items-center bg-[#252525]">
      <div className="grid md:grid-cols-2 lg:grid-cols-3  place-items-start gap-10 mt-10 text-white px-10 py-10">
        <div>
          <h1 className="text-3xl ">Live Music</h1>
          <h2 className="">
            Lorem ipsum, atau ringkasnya lipsum,
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Explore</h1>
          <h2>Guitar</h2>
          <h2>Biola</h2>
          <h2>Piano</h2>
          <h2>Dj Music</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Explore</h1>
          <h2>Guitar</h2>
          <h2>Biola</h2>
          <h2>Piano</h2>
          <h2>Dj Music</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
