import React from 'react'
import Clip from '../Clip'

const FeaturedClips = () => {
  return (
    <div className='lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full p-6 flex justify-between items-center flex-col'>
    <h3 className='text-white text-3xl mb-6'>Clips destacados</h3>
    <div className='flex gap-4'>
    <Clip />
    </div>
    </div>
  )
}

export default FeaturedClips