import React, { useState } from "react";
import { Link } from "react-scroll";
//Iconos
import Menu from "../Icons/Menu/index";
import Close from "../Icons/Close/index";
//Imagen logo
import Image from "next/image";
import profilePic from "src/images/logo-nexo.png";

const NavBar = () => {

    let Links = [
        { name: "Home", link: "home" },
        { name: "Comunidad", link: "comunidad" },
        { name: "Episodios", link: "episodios" },
        { name: "Sobre nosotros", link: "sobrenosotros" },
        { name: "Contacto", link: "contacto" },
      ];

  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-darkGrey py-4 md:px-10 px-7'>
        <div
          className='text-2xl cursor-pointer flex items-center 
      text-gray-800'
        >
          <Link
            activeClass='active'
            className=' cursor-pointer'
            to='home'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Image
              className='mr-1 pt-2'
              src={profilePic}
              alt='Logo'
              height={45}
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <div>
            {open ? (
              <Close
                className='stroke-white'
                width={30}
                height={30}
                strokeWidth={2}
              />
            ) : (
              <Menu
                className='stroke-white'
                width={30}
                height={30}
                onClick={() => {
                  setOpen(!open);
                }}
              />
            )}
          </div>
        </div>
        <ul
          className={`font-medium mm:flex mm:flex-col mm:items-end md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static mm:bg-darkGrey md:bg-transparent  md:z-auto z-[-1] right-0 w-[60%] mm:h-screen md:h-auto md:w-auto md:pl-0 pr-10 last:pr-0 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-1000px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='mm:mr-9 lg:text-xl md:text-lg w-max md:my-0 mt-8 tracking-wide cursor-pointer'
            >
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to={link.link}
                className='text-white hover:text-primary duration-500'
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className=' mm:mt-4 md:mt-0 mm:mr-9 md:mr-0'>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
