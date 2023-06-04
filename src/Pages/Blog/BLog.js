import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BLog = () => {
    return (
        <div className='min-h-screen'>
            <Link to='/' className='text-2xl text-primary p-3 inline-block rounded-[50%] hover:bg-[#ffe0716c] bg-secondary'>
                <MdArrowBack/>
            </Link>
          <h2>Coming soon...</h2>
        </div>
    );
};

export default BLog;