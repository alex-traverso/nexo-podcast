import React from 'react'
import { ChapterCard } from '../../../components/ChapterCard';
import { allChaptersData } from '../../../db/allChaptersData';
import Titles from '../../../components/Titles';

const Episodios = () => {
  return (
    
    <div id='episodios' className='bg-darkGrey mt-[5rem] lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full p-6 flex justify-between items-center flex-col'>
    <Titles>Episodios recientes</Titles>
    <div className='lg:w-[80vw] mm:flex mm:flex-col lg:flex lg:flex-row lg:justify-center flex-wrap gap-4 mb-6'>
    {allChaptersData.map((chapter, id) => (
        <ChapterCard key={id} src={chapter.name} alt={chapter.alt} width={chapter.width} height={chapter.height} title={chapter.title} time={chapter.time} date={chapter.date}/>
        ))}
    </div>
    </div>

  )
}

export default Episodios;