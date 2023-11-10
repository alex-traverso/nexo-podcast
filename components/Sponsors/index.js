import React from 'react'
import Image from 'next/image'
import { SponsorsData } from '../../db/sponsorsData'


const Sponsors = () => {
  return (
    <div className='lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full flex justify-center'>
        <div className=' flex flex-col justify-center items-center w-[60vw] border rounded-3xl p-[2rem] border-primary'>
            <h3 className='text-white text-3xl text-center'>Patrocinadores</h3>
            <div className='flex w-full justify-between px-16 mt-[1.4rem]'>
            {SponsorsData.map((image, id) => (
          <Image
            key={id}
            src={image.name}
            className='h-[40px] object-contain'
          />
        ))}
            </div>
        </div>
    </div>
  )
}

export default Sponsors