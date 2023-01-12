import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../../assets/logo.svg'
import {Link} from 'react-scroll'
import { useState } from "react";
import Switcher from '../Switcher/Switcher';
import DarkModeLogo from '../../assets/darkModeLogo.svg';
import {motion as m} from 'framer-motion';

export default function Nav () {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
    <div className='background-color text-color fixed w-full h-[100px] flex justify-between items-center px-8 text-grey-300 font-mono z-10 max-w-[1200px] dark:bg-slate-800 dark:text-white'>
    <div>
        <div className='hidden dark:flex'>
            <img src={DarkModeLogo} alt='personal logo' style={{width: '70px'}} />
        </div>
        <div className='dark:hidden'>
            <img src={Logo} alt='personal logo' style={{width: '70px'}}/>
        </div>
    </div>
    <ul className='hidden sm:flex text-color'>
        <li className='hover:underline underline-offset-4'>
            <Link to="home" smooth={true} duration={500}>
                home
            </Link>
        </li>
        <li className='hover:underline underline-offset-4'>
            <Link to="about" smooth={true} duration={500}>
                about
            </Link>
        </li>
        <li className='hover:underline underline-offset-4'>
            <Link to="skills" smooth={true} duration={500}>
                skills
            </Link>
        </li>
        <li className='hover:underline underline-offset-4'>
            <Link to="work" smooth={true} duration={500}>
                work
            </Link>
        </li>
        <li className='hover:underline underline-offset-4'>
            <Link to="contact" smooth={true} duration={500}>
                contact
            </Link>
        </li>
        <div className='px-3'>
            <Switcher />
        </div>
    </ul>

        <m.div
          initial={{x: 500, opacity: 0, scale: 1}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{ duration: 1.2 }}
         className='md:hidden z-10 flex justify-center pt-4'>
          <div className='py-3 px-6'>
            <Switcher />
          </div>
          <div onClick={handleClick}>
            <button className="relative group">
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-black hover:ring-5 group-focus:ring-4 dark:ring-gray-300 dark:hover:ring-8 dark:group-focus:ring-4 ring-opacity-75 dark:ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div className="bg-black dark:bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                  <div className="bg-black dark:bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                  <div className="bg-black dark:bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                  <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                    <div className="absolute bg-black dark:bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                    <div className="absolute bg-black dark:bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        
        </m.div>

    {/* mobile menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#EDEAE3] dark:bg-slate-800 flex flex-col justify-center items-center'}>
        <li  className='py-6 text-2xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                home
            </Link>
        </li>
        <li className='py-6 text-2xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                about
            </Link>
        </li>
        <li className='py-6 text-2xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                skills
            </Link>
        </li>
        <li className='py-6 text-2xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                work
            </Link>
        </li>
        <li className='py-6 text-2xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                contact
            </Link>
        </li>
    </ul>
    
    {/* social icons */}
    <div className='hidden md:flex fixed flex-col bottom-20 left-0'>
        <ul>
        <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                href='https://www.linkedin.com/in/green-morgan-elizabeth/' target='_blank' rel="noreferrer">
                    Linked <FaLinkedin size={25} />
                </a>
            </li>
            <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                href='https://github.com/mgreen1092' target='_blank' rel="noreferrer">
                    GitHub <FaGithub size={25} />
                </a>
            </li>
            <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                href='mailto:morgan.green0209@gmail.com' target='_blank' rel="noreferrer">
                    Email <HiOutlineMail size={25} />
                </a>
            </li>
            <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                href='https://drive.google.com/file/d/18XyBKk4cD0GLYYkGolKLJvKim3TcbJZT/view?usp=sharing' target='_blank' rel="noreferrer">
                    Resume <BsFillPersonLinesFill size={25} />
                </a>
            </li>
        </ul>

    </div>
</div>
)
}