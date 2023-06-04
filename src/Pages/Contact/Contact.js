import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sqoklio', 'template_yd74k64', form.current, 'utINKob5q-XTIPNLM')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                toast.success('Message sent, I will get back to you in short')
            }, (error) => {
                console.log(error.text);
                toast.error('could not send email')
            });
    };

    return (
        <div className='py-10'>
            <h2 className='text-2xl font-semibold tracking-wider mb-5'>Share your thoughts: </h2>
            <form className='flex gap-2 flex-col' ref={form} onSubmit={sendEmail}>
                <div className=''>
                    <label className='mb-4'>Name: </label>
                    <input className='w-full h-10 bg-secondary rounded-lg p-2' type="text" name="user_name" />
                </div>
                <div className=''>
                    <label className='mb-4'>Email: </label>
                    <input className='w-full h-10 bg-secondary rounded-lg p-2' type="email" name="user_email" />
                </div>
                <div className=''>
                    <label className='mb-4'>Message: </label>
                    <textarea className='w-full h-20 bg-secondary rounded-lg p-2' name="message" />
                </div>
                <div className='text-center'>
                    <input className='w-6/12 btn hover:bg-secondary bg-primary mt-3 text-black tracking-wider' type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;