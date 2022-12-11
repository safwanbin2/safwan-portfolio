import React from 'react';
import p from '../../Assets/p.png';
import './Project.css';

const Project = ({ project }) => {
    const { title, stack } = project;
    return (
        <div className='project relative overflow-hidden'>
            <img className='rounded-lg' src={p} alt="" />
            <div className='pro absolute hidden'>
                <h3 className='text-2xl font-semibold tracking-wider mt-4 ml-8'>{title}</h3>
                <div className='text-end mt-10 mr-4'>
                    {stack.map(s => <p className='btn btn-xs bg-[#FFE071] m-1 text-black'>{s}</p>)}
                </div>
            </div>
        </div>
    );
};

export default Project;