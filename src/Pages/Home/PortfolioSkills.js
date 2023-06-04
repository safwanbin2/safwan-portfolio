import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioSkills = () => {
    return (
        <div className='bg-secondary py-3 my-5 flex justify-between rounded-lg px-5'>
            <Link className='btn bg-secondary hover:bg-base-100 w-[48%] h-16 border-transparent hover:text-gray-500' to='/projects'>Projects</Link>
            <Link className='btn bg-secondary hover:bg-base-100 w-[48%] h-16 border-transparent hover:text-gray-500' to='/skills'>Skills</Link>
        </div>
    );
};

export default PortfolioSkills;