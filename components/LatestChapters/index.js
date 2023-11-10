import React from 'react'
import { ChapterCard } from '../ChapterCard'
import { chaptersPort } from '../../db/chaptersData'

export const LatestChapters = () => {
  return (
    <div className='lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full p-6 flex justify-between items-center flex-col'>
    <h3 className='text-white text-3xl mb-6'>Episodios recientes</h3>
    <div className='flex gap-4'>
    {chaptersPort.map((chapter, id) => (
        <ChapterCard key={id} src={chapter.name} alt={chapter.alt} width={chapter.width} height={chapter.height} title={chapter.title} time={chapter.time} date={chapter.date}/>
        ))}
    </div>
    </div>
  )
}
