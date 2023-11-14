import React from 'react'
import Image from 'next/image'
import nexoSpotlight from 'src/images/nexo-spotlight.png'
import { roboto } from '@/app/layout'

const AboutUs = () => {
  return (
    <div id='nosotros' className='lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full flex justify-center'>
    <div className="rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
        <div className='bg-darkGrey overflow-hidden mm:flex mm:flex-col lg:flex lg:flex-row lg:items-center lg:justify-between mm:w-[75vw] lg:w-[60vw] rounded-xl'>
        <div className='w-full h-full flex justify-center items-center'>
            <Image src={nexoSpotlight} className='mm:h-[12rem] mm:mt-[2rem] lg:h-[20rem] object-contain'></Image>
        </div>
            <div className='mt-[1.4rem] w-full p-[2rem]'>
            <h3 className='text-white text-2xl font-bold mb-4'>Nosotros</h3>
            <p className={`text-white ${roboto.className} mm:text-sm lg:text-base `}>Nexo Spotlight es una apasionante extensión de la marca Nexo, diseñada específicamente para servir como faro de conocimiento, inspiración y crecimiento para la comunidad de diseñadores freelancers. En Nexo Spotlight, nos enfocamos en abordar temas cruciales, desde tendencias de diseño hasta cuestiones tecnológicas emergentes que afectan a los diseñadores. Nuestra misión es proporcionar recursos educativos valiosos, entrevistas perspicaces y discusiones relevantes que equipen a los diseñadores freelance con las herramientas y la información necesarias para alcanzar su máximo potencial. Creemos en fomentar el aprendizaje continuo y la inspiración constante, y estamos entusiasmados por compartir este viaje contigo como parte de la familia Nexo.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs