import Hero from '@/app/Components/Hero';
import Portfolio from '@/app/Components/Portfolio';
import React from 'react';

const work = () => {
    return (
        <div>
           <Hero heading='My Work 'message='This some of my recent work traveling to the world.'/>
           <Portfolio/>
        </div>
    );
};

export default work;