"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { usePathname } from "next/navigation";
import Login from "../element/Login";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={clsx(
        scrolled ? `navbg` : ``,
        `w-full transition-all 2xl:rounded-3xl duration-300 mx-auto max-w-[1500px] py-5 px-5 lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex xl:px-10 flex-row justify-between items-center ">
        <div className="flex justify-start max-lg:basis-[80%]">
          <Link href="/">
            <h1 className="text-2xl  dark:text-white font-bold">LIVE MUSIC</h1>
          </Link>
        </div>
        <div className="hidden pr-[380px] gap-14 lg:flex">
          {NavigationItem.map((item, index) => (
            <Link
              href={item.src}
              className="group overflow-hidden relative"
              key={index}
            >
              <h1 className="text-base dark:text-white">{item.title}</h1>
              <div
                className={clsx(
                  pathname === item.src
                    ? "absolute top-[23px] h-[1px] w-full translate-x-[0%] dark:bg-[#fff] bg-[#000000] transition-transform duration-300 "
                    : "absolute top-[23px] h-[1px] w-full translate-x-[-100%] dark:bg-[#fff] bg-[#000] transition-transform duration-300 group-hover:translate-x-[0%]"
                )}
              ></div>
            </Link>
          ))}
        </div>
        <div>
          <Login scrolled={scrolled} />
        </div>
        <div className="lg:hidden flex ml-2">
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
