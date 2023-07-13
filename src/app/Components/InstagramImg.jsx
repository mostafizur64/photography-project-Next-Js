import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramImg = ({socialImg}) => {
    return (
        <div className='relative'>
            <Image src={socialImg} alt='/' className='w-full h-full ' layout='responsive'/>
            <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/70 group'>
            <FaInstagram className='text-gray-300 hidden group-hover:block' size={30}/>
        </div>
        </div>
    );
};

export default InstagramImg;