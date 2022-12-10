import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sqoklio', 'template_yd74k64', form.current, 'utINKob5q-XTIPNLM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='py-10'>
            <h2 className='text-2xl font-semibold tracking-wider mb-5'>Share your thoughts: </h2>
            <form className='flex gap-2 flex-col' ref={form} onSubmit={sendEmail}>
                <div className=''>
                    <label className='mb-4'>Name: </label>
                    <input className='w-full h-10 bg-[#171F26] rounded-lg' type="text" name="user_name" />
                </div>
                <div className=''>
                    <label className='mb-4'>Email: </label>
                    <input className='w-full h-10 bg-[#171F26] rounded-lg' type="email" name="user_email" />
                </div>
                <div className=''>
                    <label className='mb-4'>Message: </label>
                    <textarea className='w-full h-20 bg-[#171F26] rounded-lg' name="message" />
                </div>
                <div className='text-center'>
                    <input className='w-6/12 btn hover:bg-[#171F26] bg-[#FFE071] mt-3 text-black tracking-wider' type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;