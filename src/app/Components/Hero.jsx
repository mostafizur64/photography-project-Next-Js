import React from 'react';

const Hero = ({ heading, message }) => {
    return (
        <div className='flex justify-center items-center h-screen mb-[10rem] bg-fixed bg-cover bg-center custom-img'>
            {/* overlay  */}
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/70 z-[2]' />
            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'>{heading}</h2>
                <p className='py-5 text-xl'>{message}</p>
                <button className='py-2 px-8 border'>Book</button>
            </div>
        </div>
    );
};

export default Hero;