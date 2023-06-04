import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='min-h-screen'>
            <Link to='/' className='text-2xl text-primary p-3 inline-block rounded-[50%] hover:bg-[#ffe0716c] bg-secondary'>
                <MdArrowBack />
            </Link>
            <div className='tracking-wider'>
                <h2 className='text-2xl py- font-semibold text-primary mt-4'>SAFWAN BIN RIDWAN</h2>
                <h3 className='text-xl mb-6'>Web Developer</h3>
                <p>I am a MERN stack Web Developer from Bangladesh. Throughout my Development journey, I have gained knowledge on HTML, CSS, Javascript, React Js, Node Js, Express Js, Mongo DB, Firebase, Bootstrap, Tailwind. I am Currently learning React native.</p>
            </div>
            <div className='tracking-wider'>
                <h2 className='text-xl text-primary font-semibold mt-6'>Education : </h2>
                <div className='mb-3'>
                    <p>Diploma in Computer Science and Technology</p>
                    <p> - Bangladesh Sweden Polytechnic Institute</p>
                    <p>( 2017 - 2022 )</p>
                </div>
                <div className='mb-3'>
                    <p>Bachelor of Science (B.Sc) in Computer Science Engineering (CSE)</p>
                    <p> - East Delta University, Chittagong</p>
                    <p>( 2023 - Ongoing )</p>
                </div>
            </div>
            <div className='tracking-wider'>
                <h2 className='text-xl text-primary font-semibold mt-6'>Hobbies : </h2>
                <p>Coding, Cycling, Gaming, Fishing.</p>
            </div>
        </div>
    );
};

export default About;