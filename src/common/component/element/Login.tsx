import clsx from "clsx";
import React from "react";

interface LoginProps {
  scrolled: boolean;
}

const Login = ({scrolled}: LoginProps) => {
  return (
    <button className={clsx(
      scrolled 
      ? 'outline-[#000]'
      : 'outline-[#fff]',
      "text-lg relative overflow-hidden group max-md:outline-[#1E1E1E] text-white outline outline-[1px]  py-[1px] px-5 rounded-full")}>
      <h1 className={clsx(
        scrolled
        ? 'text-black'
        : 'text-white',
        "group-hover:z-[9] max-md:text-black lg:group-hover:text-black lg:transition-all lg:duration-300 relative")}>
        Login
      </h1>
      <div className="absolute inset-0 lg:translate-y-[100%] lg:bg-[#fff] lg:transition-transform lg:duration-300 lg:group-hover:translate-y-[0%]"></div>
    </button>
  );
};

export default Login;
