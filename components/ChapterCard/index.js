import React from 'react'
import Image from 'next/image'

export const ChapterCard = ({src, alt, width, height, title, time, date}) => {
  return (
    <div className='text-white flex flex-col justify-center items-center bg-darkGrey w-[300px] border-2 border-primary rounded-xl px-4 py-6'>
    <Image alt={alt} src={src} width={width} height={height}></Image>
    <h4 className='text-white mt-4'>{title}</h4>
    <div className='mt-2 text-lightGrey w-full flex flex-row justify-between'>
    <p>{time}</p>
    <p>{date}</p>
    </div>
    </div>
  )
}
