import React from "react";
import Clip from "../Clip";
import { featuredClipsData } from "../../db/featuredClipsData";
import Titles from "../Titles";
import Button from "../Button";

const FeaturedClips = () => {
  return (
    <div className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full p-6 flex justify-center items-center flex-col">
      <Titles>Clips destacados</Titles>
      <div className="mm:flex mm:flex-col lg:flex lg:flex-row lg:flex-wrap lg:justify-center w-[70vw] gap-4">
        {featuredClipsData.map((clip, id) => (
          <Clip
            key={id}
            name={clip.name}
            url={clip.url}
            title={clip.title}
            number={clip.number}
            author={clip.author}
            src={clip.src}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedClips;
