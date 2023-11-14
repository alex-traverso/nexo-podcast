import React from 'react'
import Image from 'next/image'
import playIcon from 'src/images/play.svg'

const Clip = ({number, src, title, height, width, author, url}) => {
  return (
    <div className="mm:w-[75vw] lg:w-[25vw] rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
    <div className='overflow-hidden rounded-xl bg-darkGrey min-h-[95px] flex justify-between items-center px-[1rem]'>
    <h3 className='text-white mm:text-2xl lg:text-4xl'>.{number}</h3>
    <div className='overflow-hidden'>
    <Image src={src} className='mm:h-[50px] lg:h-[100px] object-contain transition-all duration-100 hover:scale-[1.05]'></Image>
    </div>
    <div className='text-white'>
        <h3 className='mm:text-base lg:text-lg mb-1'>{title}</h3>
        <p className='mm:text-xs lg:text-sm font-medium'>{author}</p>
    </div>
    <a target='_blank' href={url}>
        <Image src={playIcon} className='mm:h-[2.2rem] lg:h-[3rem]'></Image>
    </a>
    </div>
    </div>
  )
}

export default Clip