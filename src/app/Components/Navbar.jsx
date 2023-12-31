"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaRegWindowClose } from "react-icons/fa";
const Navbar = () => {
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#000000')
            }
            else {
                setColor('transparent'),
                    setTextColor('#ffffff')
            }
        };
        window.addEventListener('scroll', changeColor);
    }, [])
    return (
        <div style={{ backgroundColor: `${color}` }} className='fixed top-0 left-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1200px] m-auto flex justify-between items-center p-4 text-white'>

                <Link href='/'>
                    <h1 style={{ color: `${textColor}` }} className='text-bold text-4xl'>Captur</h1>
                </Link>


                <ul className='hidden sm:flex' style={{ color: `${textColor}` }}>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

                {/* mobile button  */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <FaRegWindowClose size={20} style={{ color: `${textColor}` }} /> : <FaBars size={20} style={{ color: `${textColor}` }} />}


                </div>
                {/* mobile device  */}

                <div className={nav ? 'sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[1000px] right-0  bottom-0 flex justify-center items-center h-screen bg-black text-center ease-in duration-300'}>

                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:bg-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:bg-gray-500'>
                            <Link href='/#gallery'>Gallery</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:bg-gray-500'>
                            <Link href='/work'>Work</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:bg-gray-500'>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;