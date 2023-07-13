import Contact from '@/app/Components/Contact';
import Hero from '@/app/Components/Hero';
import React from 'react';

const contact = () => {
    return (
        <div>
            <Hero heading='Contact' message='Submit the from below for more work and quotes.'/>
            <Contact/>
       
        </div>
    );
};

export default contact;