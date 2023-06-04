import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = ({ project }) => {
    const { title, stack, banner, _id } = project;
    return (
        <Link to={`/l2/projects/${_id}`} className='project relative overflow-hidden transition-all'>
            <img className='rounded-lg h-[220px] w-full' src={banner} alt="" />
            <div className='pro absolute hidden'>
                <h3 className='text-2xl font-bold tracking-wider text-black'>{title}</h3>
                <div className=''>
                    {stack.map(s => <p className='btn text-black btn-xs mr-1 mt-1'>{s}</p>)}
                </div>
            </div>
        </Link>
    );
};

export default Project;