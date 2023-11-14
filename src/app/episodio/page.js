import React from "react";
import { allChaptersData } from "../../../db/allChaptersData";
import Titles from "../../../components/Titles";
import { ChapterCard } from "../../../components/ChapterCard";
import Image from "next/image";
import nexoSpotlight from "src/images/nexo-spotlight.png";
import AudioPlayer from "../../../components/AudioPlayer";

import { roboto } from "@/app/layout";

const Episodio = () => {
  return (
    <>
      <div className="bg-darkGrey mt-[5rem] lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full p-6 flex justify-between items-center flex-col">
        <div className="rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
          <div className="bg-darkGrey overflow-hidden mm:flex mm:flex-col mm:items-center lg:flex lg:flex-row lg:items-center lg:justify-between mm:w-[75vw] lg:w-[70vw] rounded-xl">
            <div className="mm:w-[70vw] lg:w-[50vw] flex justify-center items-center">
              <Image
                src={nexoSpotlight}
                className="mm:h-[12rem] mm:mt-[2rem] lg:h-[20rem] w-auto object-contain"
              ></Image>
            </div>
            <div className="mt-[1.4rem] w-full p-[2rem]">
              <h3 className="text-white text-2xl font-bold mb-4">
                #NexoSpotlight: 'Diseño Freelance: Navegando el Futuro Creativo'
              </h3>
              <AudioPlayer src="audio/podcastAudio.mp3" controls />
              <p
                className={`text-white ${roboto.className} mm:text-sm lg:text-base `}
              >
                En nuestro episodio inaugural de Nexo Spotlight, exploramos un
                fascinante viaje a través del mundo del diseño freelance.
                Descubre las últimas tendencias de diseño que están
                transformando la industria y cómo la inteligencia artificial
                está impactando en el trabajo de los diseñadores. Además, te
                presentamos estrategias efectivas para administrar tu tiempo y
                alcanzar la excelencia en tu carrera independiente. No te
                pierdas una inspiradora entrevista con un diseñador freelance
                exitoso, quien comparte su experiencia y consejos. Por último,
                abordamos el tema crucial de cómo afrontar los desafíos del
                desempleo en el contexto de la Argentina actual. ¡Bienvenidos a
                un episodio lleno de información, inspiración y oportunidades
                para diseñadores freelance!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-darkGrey lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full p-6 flex justify-between items-center flex-col">
        <Titles>Otros episodios</Titles>
        <div className="lg:w-[80vw] mm:flex mm:flex-col lg:flex lg:flex-row lg:justify-center flex-wrap gap-4 mb-6">
          {allChaptersData.map((chapter, id) => (
            <ChapterCard
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
      </div>
    </>
  );
};

export default Episodio;
