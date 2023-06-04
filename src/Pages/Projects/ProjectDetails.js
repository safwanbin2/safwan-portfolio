import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const ProjectDetails = () => {
    const project = useLoaderData();
    const { banner, images, title, motto, stack, features, github, live } = project[0];
    return (
        <div className='min-h-screen'>
            <Link to='/' className='text-2xl text-primary p-3 inline-block rounded-[50%] hover:bg-[#ffe0716c] bg-secondary'>
                <MdArrowBack />
            </Link>
            <div>
                <div className='grid gap-2' style={{ gridTemplateColumns: "1fr" }}>
                    <img className=' rounded-lg' src={banner} alt="" />
                    <div className='grid grid-cols-2 gap-2'>
                        <img className='h-[200px] rounded-lg' src={images[0]} alt="" />
                        <img className='h-[200px] rounded-lg' src={images[1]} alt="" />
                    </div>
                </div>
                <h3 className='py-5 text-2xl font-semibold tracking-wider'>{title} - {motto} :</h3>
                <div className='mb-4 mt-2 font-semibold text-primary tracking-widest cursor-pointer'>
                    <a rel="noreferrer" target='_blank' href={github} >Github</a> | <a rel="noreferrer" target='_blank' href={live}>Live</a>
                </div>
                <div>
                    <h2 className='text-xl'>Features : </h2>
                    <ul className="list-disc ">
                        {features.map((f, i) => <li className='ml-10 mt-4' key={i}>{f}</li>)}
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl py-5'>Tech stack : </h2>
                    <div>
                        {stack.map((s, i) => <h3 key={i} className="px-6 py-3 bg-secondary inline-block m-2 rounded-full">{s}</h3>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;