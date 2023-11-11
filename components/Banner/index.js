import React from 'react'
import Image from 'next/image';
import Button from '../Button'
import bannerImg from 'src/images/banner-img.png';
import { roboto } from '@/app/layout';


export const Banner = () => {
  return (
    /* calc(100vh_-_5rem) */
    <div className='bg-darkGrey w-full h-[100vh] flex items-center justify-center gap-4'>
        <div className='text-white w-[25vw]'>
            <h2 className='text-5xl font-bold mb-6'>El podcast de diseño que buscabas</h2>
            <p className={`mb-6 text-white ${roboto.className}`}>Sumergite en increíbles charlas sobre el diseño. Descubre nuevas perspectivas y conéctate con expertos en cada episodio. ¡No te pierdas nuestros capítulos recientes y mantenete al día con las últimas tendencias en el diseño creativo!</p>
        <Button
            href='/'
            rel='noreferrer'
        >
            CONTACTO
        </Button>
        </div>
        <Image className='w-[600px] h-auto'
        src={bannerImg}
        alt='Logo'/>
    </div>
  )
}
