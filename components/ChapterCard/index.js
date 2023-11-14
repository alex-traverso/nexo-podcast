import React from 'react'
import Image from 'next/image'
import play from 'src/images/play.svg'
import Link from 'next/link'

export const ChapterCard = ({src, alt, width, height, title, time, date}) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
    <div className='text-white overflow-hidden bg-darkGrey w-[300px] h-full rounded-xl'>
      <div className='overflow-hidden w-full relative group'>
        <Image className='group-hover:scale-[1.05] transition-all duration-200' alt={alt} src={src} width='300' height={height} 
        objectFit='contain'></Image>
        <div className='absolute w-full h-full opacity-0 hover:opacity-100 top-0 left-0 flex items-center justify-center bg-white/25 transition-all duration-100'>
        <Link target='_blank' href='https://google.com.ar'>
          <Image src={play} className='h-[5rem] w-auto'></Image>
        </Link>
        </div>
      </div>
  
      <div className='px-4 py-6'>
        <h4 className='text-white'>{title}</h4>
        <div className='mt-2 text-lightGrey w-full flex flex-row justify-between'>
          <p>{time}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
    </div>
  )
}
