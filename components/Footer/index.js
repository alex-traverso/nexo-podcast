'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import nexoSpotlight from 'src/images/nexo-spotlight.png'

import instagram from "src/images/social-media-logos/instagram.png";
import spotify from 'src/images/social-media-logos/spotify.png'
import tiktok from 'src/images/social-media-logos/tiktok.png'
import youtube from 'src/images/social-media-logos/youtube.png'
import twitter from 'src/images/social-media-logos/twitter.png'

const logoImages = [
    { name: instagram, url: "https://www.instagram.com/nexodesigners/", },
    { name: spotify, url: "https://open.spotify.com/intl-es" },
    { name: tiktok, url: "https://www.tiktok.com/" },
    { name: youtube, url: "https://www.youtube.com/" },
    { name: twitter, url: "https://twitter.com/" },
]

const sections = [
  {name: "Home", url: "/" },
  {name: "Episodios", url: "/episodios" },
  {name: "Nosotros", url: "/#nosotros" },
  {name: "Contacto", url: "/#contacto" },
]

const today = new Date();

const Footer = () => {
  return (

    <>
      <div className='lg:px-sectionSides mm:px-sectionSidesMobile bg-darkness p-sectionTop lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <div className='mm:flex mm:flex-col mm:items-center mm:justify-center lg:flex lg:flex-row lg:justify-between lg:items-center w-full gap-[2rem] mb-[2rem]'>
      <Link href='/'>
      <Image src={nexoSpotlight} className='h-[80px] w-[90px] object-contain'></Image>
      </Link>

      <div className='mm:min-h-[1px] mm:min-w-[60vw] border border-[#3C3C3C] lg:min-h-[80px] lg:min-w-[1px]'></div>

      <ul className='mm:flex mm:flex-col mm:items-center lg:flex lg:flex-row lg:justify-center gap-[1.5rem] text-white'>
        {sections.map ((section, id) => (
          <Link href={section.url}>
          <li key={id}>{section.name}</li>
          </Link>
        ))}
      </ul>

      <div className='mm:min-h-[1px] mm:min-w-[60vw] border border-[#3C3C3C] lg:min-h-[80px] lg:min-w-[1px]'></div>

      <div className='flex justify-between items-start gap-[1rem]'>
      {logoImages.map((image, id) => (
        <Link target='_blank' href={image.url}>
          <Image
            key={id}
            src={image.name}
            className='h-[30px] w-[30px] object-contain'
          />
        </Link>
        ))}
      </div>

      </div>
        <div className='w-full'>
          <p className=' text-zinc-400 text-center mm:text-[0.8rem] m:text-[0.9rem]'>
            ©{today.getFullYear()} NEXO. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer





