import React from 'react'
import Image from 'next/image'

export const ChapterCard = ({src, width, height, title, time, date}) => {
  return (
    <div className='text-white'>
    <Image src={src} width={width} height={height}></Image>
    <h4 className='text-white'>{title}</h4>
    <div className='text-lightGrey'>
    <p>{time}</p>
    <p>{date}</p>
    </div>
    </div>
  )
}
