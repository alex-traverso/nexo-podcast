import React from "react";
import Image from "next/image";
import play from "src/images/play.svg";
import Link from "next/link";

export const ChapterCard = ({
  src,
  alt,
  width,
  height,
  title,
  time,
  date,
  href,
}) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
      <div className="text-white overflow-hidden bg-darkGrey w-[300px] h-full rounded-xl">
        <div className="overflow-hidden w-full relative group">
          <Link href="/episodio">
            <Image
              className="group-hover:scale-[1.05] transition-all duration-200"
              alt={alt}
              src={src}
              width="300"
              height={height}
              objectFit="contain"
            ></Image>
            <div className="absolute w-full h-full opacity-0 hover:opacity-100 top-0 left-0 flex items-center justify-center bg-black/50 transition-all duration-100">
              <Image src={play} className="h-[5rem] w-auto"></Image>
            </div>
          </Link>
        </div>

        <div className="px-4 py-6">
          <Link href="/episodio">
            <h4 className="text-white">{title}</h4>
            <div className="mt-2 text-lightGrey w-full flex flex-row justify-between">
              <p>{time}</p>
              <p>{date}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
