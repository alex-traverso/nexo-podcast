import React from "react";
import Image from "next/image";
import { SponsorsData } from "../../db/sponsorsData";
import Titles from "../Titles";

const Sponsors = () => {
  return (
    <div className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full flex justify-center">
      <div className="rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
        <div className="bg-darkGrey mm:flex mm:justify-center mm:flex-wrap lg:flex lg:flex-col lg:justify-center lg:items-center mm:w-[75vw] lg:w-[60vw] rounded-xl p-[2rem]">
          <Titles>Patrocinadores</Titles>
          <div className="mm:flex mm:flex-wrap mm:justify-center mm:items-center mm:gap-2 lg:flex w-full lg:justify-between mm:px-6 lg:px-16 mt-[1.4rem]">
            {SponsorsData.map((image, id) => (
              <Image
                key={id}
                src={image.name}
                className="mm:w-[150px] mm:h-[50px] lg:h-auto lg:w-[8rem] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
