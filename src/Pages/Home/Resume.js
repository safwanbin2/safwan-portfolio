import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { BiCommentDots } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div className='block lg:flex justify-between mb-5'>
            <a rel="noreferrer" href='https://drive.google.com/file/d/1x8Ri90IIcm-mZP-WbCgCA9MJvJhLLiAI/view?usp=share_link'
            target="_blank" className='bg-primary  btn w-full lg:w-[48%] h-16 text-base-100 hover:bg-secondary hover:text-[#A3ABB2] tracking-widest mb-5'>Download Resume <span className='ml-2 text-xl font-semibold'> <BsDownload/> </span></a >
            <Link to='/contact' className='bg-secondary border-transparent hover:bg-primary  btn w-full lg:w-[48%] h-16 tracking-widest'>Contact Me <span className='ml-2 text-xl font-semibold'> <BiCommentDots/> </span> </Link>
        </div>
    );
};

export default Resume;