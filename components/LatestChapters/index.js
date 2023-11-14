import React from "react";
import { ChapterCard } from "../ChapterCard";
import { chaptersPort } from "../../db/chaptersData";
import Titles from "../Titles";
import Button from "../Button";

export const LatestChapters = () => {
  return (
    <div className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full p-6 flex justify-between items-center flex-col">
      <Titles>Episodios recientes</Titles>
      <div className="mm:flex mm:flex-col lg:flex lg:flex-row gap-4 mb-6">
        {chaptersPort.map((chapter, id) => (
          <ChapterCard
            href={chapter.href}
            key={id}
            src={chapter.name}
            alt={chapter.alt}
            width={chapter.width}
            height={chapter.height}
            title={chapter.title}
            time={chapter.time}
            date={chapter.date}
          />
        ))}
      </div>
      <Button href="/episodios">Ver más</Button>
    </div>
  );
};
