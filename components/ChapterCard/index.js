import React from 'react'
import Image from 'next/image'

export const ChapterCard = ({src, alt, width, height, title, time, date}) => {
  return (
    <div className='text-white overflow-hidden bg-darkGrey w-[300px] border-2 border-primary rounded-xl'>
      <Image alt={alt} src={src} width='300' height={height} 
      objectFit='contain'></Image>
      <div className='px-4 py-6'>
        <h4 className='text-white'>{title}</h4>
        <div className='mt-2 text-lightGrey w-full flex flex-row justify-between'>
          <p>{time}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}
