import React from 'react'
import { ChapterCard } from '../ChapterCard'
import { chaptersPort } from '../../chaptersData'

export const LatestChapters = () => {
  return (
    <div className='w-full p-6 bg-lightGrey flex justify-center items-center flex-col'>
    <h3 className='text-white text-3xl mb-6'>Episodios recientes</h3>
    <div className='flex gap-2'>
    {chaptersPort.map((chapter, id) => (
        <ChapterCard key={id} src={chapter.name} alt={chapter.alt} width={chapter.width} height={chapter.height} title={chapter.title} time={chapter.time} date={chapter.date}/>
        ))}
    </div>
    </div>
  )
}
