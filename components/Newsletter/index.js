import React from 'react'
import Button from '../Button'

export const Newsletter = () => {
  return (
    <div className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom w-full flex justify-center mx-auto max-w-7xl px-6">
    <div className='h-auto w-full rounded-3xl bg-gradient-to-r from-transparent to-primary p-[2px]'>

    <div className="bg-darkGrey w-full overflow-hidden px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
       
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Suscribite a nuestro Newsletter
        </h2>
        <p className="mt-2 text-center text-gray-300">
        Suscribite a nuestro Newsletter para estar siempre al tanto de la última información.
        </p>

        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <input id="email-address" name="email" type="email" autocomplete="email" required="" className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10  focus:ring-white sm:text-sm sm:leading-6" placeholder="nexospotlight@gmail.com"></input>
            <Button>Enviar</Button>
        </form>
    </div>
    </div>
</div>
  )
}
