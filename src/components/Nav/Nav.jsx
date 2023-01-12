import React from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../../assets/logo.svg'
import {Link} from 'react-scroll'
import { useState } from "react";
import Switcher from '../Switcher/Switcher'
import DarkModeLogo from '../../assets/darkModeLogo.svg'

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
    {/* media  */}
    <div onClick={handleClick} className='sm:hidden z-10 flex justify-center'>
        <div className='py-3 px-3'>
            <Switcher />
        </div>
        <div className='py-4 px-3'>
            {!nav ? <FaBars color='#221F1B'/> : <FaTimes color='#EDEAE3'/>}
        </div>
    </div>

    {/* mobile menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#221F1B] text-[#EDEAE3] flex flex-col justify-center items-center'}>
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