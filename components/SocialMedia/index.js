import React from 'react'
import Image from 'next/image'
import Titles from '../Titles';
import Link from 'next/link';

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

const SocialMedia = () => {
  return (
    <div className='lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full flex justify-center'>

    <div className="rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
        <div className='flex flex-col justify-center items-center mm:w-[70vw] lg:w-[55vw] rounded-xl p-[2rem] bg-darkGrey'>
            <Titles>Nuestras redes</Titles>
            <div className='flex w-full justify-between lg:px-16'>
            {logoImages.map((image, id) => (
              <Link target='_blank' href={image.url}>
          <Image
            key={id}
            src={image.name}
            className='mm:h-[35px] mm:w-[30px] lg:h-[50px] lg:w-[50px] object-contain'
          />
        </Link>
        ))}
            </div>
        </div>
      </div>

    </div>
  )
}

export default SocialMedia