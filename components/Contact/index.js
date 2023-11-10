import React from "react";
import Titles from "../Titles";
import Button from "../Button";

export default function Contact() {

  return (
    <div
      id='contact'
      className='flex flex-col justify-center items-center w-full bg-lightestBg dark:bg-darkGrey pb-sectionBottom pt-sectionTop '
    >
      <Titles>Contacto</Titles>
      <form
        type='submit'
        className=' flex flex-col justify-center items-start lg:w-[45%] smm:w-[60%] mm:w-[80%] gap-3 text-white'
      >
      <div className="w-full rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
        <input
          required
          className=' bg-lightestGrey lg:p-3 mm:px-3 mm:py-2 w-full rounded-xl'
          type='text'
          name='name'
          placeholder='Nombre'
        />
      </div>

      <div className="w-full rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
        <input
          required
          className=' bg-lightestGrey lg:p-3 mm:px-3 mm:py-2 w-full rounded-xl'
          type='text'
          name='name'
          placeholder='Apellido'
        />
      </div>
      
      <div className="w-full rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]">
        <input
          required
          className='bg-lightestGrey lg:p-3 mm:px-3 mm:py-2 w-full rounded-xl'
          type='text'
          name='email'
          placeholder='Email'
        />
      </div>

      <div className="w-full rounded-xl bg-gradient-to-r from-transparent to-primary p-[2px]"> 
        <textarea
          required
          className='bg-lightestGrey lg:p-3 mm:px-3 mm:py-2 w-full resize-none h-48 rounded-xl'
          name='message'
          type='textarea'
          placeholder='Mensaje'
        ></textarea>
      </div>

        <Button
          type='submit'
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
