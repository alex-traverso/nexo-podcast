import React from 'react'
import Image from 'next/image';
import Button from '../Button'
import bannerImg from 'src/images/banner-img.png';
import { roboto } from '@/app/layout';


export const Banner = () => {
  return (
    <div className='mm:flex mm:flex-col-reverse mm:justify-center mm:items-center bg-darkGrey w-full mt-[5rem] h-[calc(100vh_-_5rem)] flex lg:flex-row lg:items-center lg:justify-center lg:gap-4'>
        <div className='text-white mm:w-[90vw] lg:w-[25vw]'>
            <h2 className='mm:text-4xl lg:text-5xl font-bold mb-6'>El podcast de diseño que buscabas</h2>
            <p className={`mb-6 text-white ${roboto.className}`}>Sumergite en increíbles charlas sobre el diseño. Descubre nuevas perspectivas y conéctate con expertos en cada episodio. ¡No te pierdas nuestros capítulos recientes y mantenete al día con las últimas tendencias en el diseño creativo!</p>
        <Button
            href='/'
            rel='noreferrer'
        >
            CONTACTO
        </Button>
        </div>
        <Image className='mm:w-[80vw] lg:w-[600px] h-auto'
        src={bannerImg}
        alt='Logo'/>
    </div>
  )
}
