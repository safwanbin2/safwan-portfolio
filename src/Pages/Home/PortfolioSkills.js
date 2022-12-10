import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioSkills = () => {
    return (
        <div className='bg-[#171F26] py-3 my-5 flex justify-between rounded-lg px-5'>
            <Link className='btn bg-[#171F26] hover:bg-[#0C151D] w-[48%] h-16' to='/projects'>Projects</Link>
            <Link className='btn bg-[#171F26] hover:bg-[#0C151D] w-[48%] h-16' to='/skills'>Skills</Link>
        </div>
    );
};

export default PortfolioSkills;