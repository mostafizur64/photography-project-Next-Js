import React from 'react';

const Contact = () => {
    return (
        <div className='max-w-[1240px] mx-auto -mt-[7rem]'>
            <h1 className='text-2xl font-bold text-center'>Let's work Together</h1>
            <form className='max-w-[600px] mx-auto mt-4'>
                <div className='grid grid-cols-2 gap-2'>
                    <input className='border shadow-lg p-3' type="text" name='name' placeholder='Name' />
                    <input className='border shadow-lg p-3' type="email" name='email' placeholder='Email' />
                </div>
                <input className='border shadow-lg p-3 w-full my-2' type="text" name='subject' placeholder='Subject' />
                <textarea className='border shadow-lg p-3 w-full' name="message" id="" cols="30" rows="10" placeholder='Message'  />
                <button className='w-full border shadow-lg p-3'>Submit</button>

            </form>
        </div>
    );
};

export default Contact;