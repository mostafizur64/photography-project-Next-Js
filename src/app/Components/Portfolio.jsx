import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
    return (
        <div className='max-w-[1240px] mx-auto -mt-[7rem]'>
            <h1 className='text-center text-2xl text-bold p-4'>Travel Photo</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
                <div className='w-full h-full '>
                    <Image
                        src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt='/'
                        layout='responsive'
                        width='677'
                        height='451'
                    />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='w-full h-full'>
                        <Image
                            src='https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'
                            alt='/'
                            width='215'
                            height='217'
                            layout='responsive'
                            objectFit='cover'
                        />
                    </div>
                    <div className='w-full h-full'>
                        <Image
                            src='https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80'
                            alt='/'
                            width='215'
                            height='217'
                            layout='responsive'
                            objectFit='cover'
                        />
                    </div>
                    <div className='w-full h-full'>
                        <Image
                            src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                            alt='/'
                            width='215'
                            height='217'
                            layout='responsive'
                            objectFit='cover'
                        />
                    </div>
                    <div className='w-full h-full'>
                        <Image
                              src='https://images.unsplash.com/photo-1614823498916-a28a7d67182c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9ncmFweXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/'
                            width='215'
                            height='217'
                            layout='responsive'
                            objectFit='cover'
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Portfolio;