import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonsProps {
    className: string;
    icon: ReactNode;
    icons: ReactNode;
    href: string;
    title: string;
}

const Buttons = ({className= '', icons,icon, href, title}: ButtonsProps) => {
  return (
    <Button
      size="lg"
      color="default"
      className={clsx("lg:hover:bg-neutral-100 bg-[#009B47] text-white relative group lg:transition-all lg:duration-300", className)}
      as={Link}
      href={href}
      target="__blank"
    >
      <h1 className=" z-[99] flex items-center gap-2   lg:transition-all lg:duration-300 relative">
        <span>
        {icon && <>{icon}</>}
        </span>
        {title}
      </h1>
      <div className="absolute top-0 right-[-12px] group-hover:z-[2] group-hover:rotate-12">
      {icons && <>{icons}</>}
      </div>
      <div className="absolute inset-0 lg:translate-y-[100%] lg:bg-[#000] lg:transition-transform lg:duration-300 lg:group-hover:translate-y-[0%]"></div>
    </Button>
  );
};

export default Buttons;
