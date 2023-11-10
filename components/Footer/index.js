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
  {name: "Comunidad", url: "/" },
  {name: "Episodios", url: "/episodios" },
  {name: "Sobre nosotros", url: "/" },
  {name: "Contacto", url: "/" },
]

const today = new Date();

const Footer = () => {
  return (

    <>
      <div className='lg:px-sectionSides mm:px-sectionSidesMobile bg-[#0D0D0E] min-h-14 p-sectionTop flex flex-col justify-center items-center'>
      <div className='flex justify-between items-center w-full mb-[2rem]'>
      <Link href='/'>
      <Image src={nexoSpotlight} className='h-[80px] w-[90px] object-contain'></Image>
      </Link>

      <div className='border border-[#3C3C3C] min-h-[80px]'></div>

      <ul className='flex justify-center gap-[1.5rem] text-white'>
        {sections.map ((section, id) => (
          <Link href={section.url}>
          <li key={id}>{section.name}</li>
          </Link>
        ))}
      </ul>

      <div className='border border-[#3C3C3C] min-h-[80px]'></div>

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
        <div className='w-max'>
          <p className=' text-zinc-400 text-center mm:text-[0.8rem] m:text-[0.9rem]'>
            ©{today.getFullYear()} NEXO. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer





