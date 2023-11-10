import React from 'react'
import Image from 'next/image'
import playIcon from 'src/images/play.svg'

const Clip = ({number, src, title, height, width, author, url}) => {
  return (
    <div className='border-2 overflow-hidden border-primary rounded-2xl w-[400px] min-h-[95px] flex justify-between items-center px-[1rem]'>
    <h3 className='text-white text-4xl'>.{number}</h3>
    <Image src={src} width={width} height={height}></Image>
    <div className='text-white'>
        <h3>{title}</h3>
        <p>{author}</p>
    </div>
    <a target='_blank' href={url}>
        <Image src={playIcon}></Image>
    </a>
    </div>
  )
}

export default Clip