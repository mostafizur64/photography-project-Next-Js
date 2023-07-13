"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Sliders = ({ sliders }) => {
    const [current, setCurrent] = useState(0)
    const length = sliders.length;
    const nextSlider = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlider = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(sliders) || sliders.length <= 0) {
        return null;
    }
    return (
        <div id='gallery' className='max-w-[1240p] mx-auto -mt-20 '>
            <h1 className='text-2xl font-bold text-center'>Gallery</h1>


            <div className='relative flex justify-center p-4' >
                {
                    sliders.map((item, index) => {
                        return (
                            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>

                                <FaAngleLeft onClick={prevSlider} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer z-[2] select-none' size={50} />
                                {
                                    index === current && (
                                        <Image width='1440' height='600' objectFit='cover' src={item.image} alt="" />
                                    )
                                }
                                <FaAngleRight onClick={nextSlider} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer z-[2] select-none' size={50} />
                            </div>
                        )
                    })
                }
            </div>


            <div></div>
        </div>
    );
};

export default Sliders;