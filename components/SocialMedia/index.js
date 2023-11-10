import React from 'react'
import Image from 'next/image'

import instagram from "src/images/social-media-logos/instagram.png";
import spotify from 'src/images/social-media-logos/spotify.png'
import tiktok from 'src/images/social-media-logos/tiktok.png'
import youtube from 'src/images/social-media-logos/youtube.png'
import twitter from 'src/images/social-media-logos/twitter.png'

const logoImages = [
    { name: instagram, url: "/", },
    { name: spotify, url: "/" },
    { name: tiktok, url: "/" },
    { name: youtube, url: "/" },
    { name: twitter, url: "/" },
]

const SocialMedia = () => {
  return (
    <div className='w-full h-[15rem] flex justify-center'>
        <div className=' flex flex-col justify-center items-center w-[60vw] border rounded-3xl border-primary'>
            <h3 className='text-white text-3xl text-center'>Nuestras Redes</h3>
            <div className='flex w-full justify-between px-16 mt-[2rem]'>
            {logoImages.map((image, id) => (
          <Image
            key={id}
            src={image.name}
            className='h-[50px] w-[50px] object-contain'
          />
        ))}
            </div>
        </div>
    </div>
  )
}

export default SocialMedia