import React from 'react'

const today = new Date();

const Footer = () => {
  return (

    <>
      <div className='lg:px-sectionSides mm:px-sectionSidesMobile bg-dark h-14 p-sectionTop flex justify-center items-center'>
        <div className='w-max'>
          <p className=' text-zinc-300 text-center mm:text-[0.8rem] m:text-[0.9rem]'>
            ©{today.getFullYear()} NEXO. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer





