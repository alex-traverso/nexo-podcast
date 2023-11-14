//Iconos
"use client";
import ArrowTop from "../Icons/ArrowTop";
import { Link } from "react-scroll";
import React from "react";

const ScrollToTop = () => {
  return (
    <div className="cursor-pointer flex flex-col justify-end items-center fixed bottom-[3rem] z-50 lg:right-16 mm:right-4 gap-6 lg:h-2/6 md:h-1/4 mm:h-1/5">
      <Link to="home">
        <ArrowTop className="mm:w-[35px] lg:w-[50px] h-auto fill-white hover:scale-[1.05] duration-500 shadow-lg" />
      </Link>
    </div>
  );
};

export default ScrollToTop;
