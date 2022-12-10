import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div className='flex justify-between mb-5'>
            <a rel="noreferrer" href='https://drive.google.com/file/d/1x8Ri90IIcm-mZP-WbCgCA9MJvJhLLiAI/view?usp=share_link'
            target="_blank" className='bg-[#FFE071] btn w-[48%] h-16 text-base-100 hover:text-[#A3ABB2] tracking-widest'>Download Resume</a >
            <Link to='/contact' className='bg-[#171F26] hover:bg-[#FFE071] text-[#A3ABB2] btn w-[48%] h-16 tracking-widest'>Contact Me</Link>
        </div>
    );
};

export default Resume;