import React from 'react';
import safwan from '../../Assets/safwan.png';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { ImBlog } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='grid h-[250px] justify-between items-center my-3 header'>
            <div className='bg-[#FFE071] overflow-hidden w-[200px] h-[200px] mx-auto' style={{borderRadius: "50%", border: "6px solid white"}}>
                <img className='-rotate-12' src={safwan} alt="" />
            </div>
            <div className='text-center lg:text-start'>
                <h3 className='font-medium text-4xl text-white tracking-widest my-4'>Safwan Bin Ridwan</h3>
                <h5 className='font-medium tracking-widest my-4'>Web Developer | <Link to='/l2/about' className='text-[#FFE071]'>About</Link> | <Link to='/l2/blog' className='text-[#FFE071]'>Blog <ImBlog className='inline'/></Link></h5>
                <div className='flex justify-between items-center w-6/12 lg:w-32 my-4 mx-auto lg:mx-0'>
                    <a className='text-2xl lg:text-xl' rel="noreferrer" target='_blank' href="https://github.com/safwanbin2">
                        <BsGithub />
                    </a>
                    <a className='text-2xl lg:text-xl' rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/devsafwan">
                        <BsLinkedin />
                    </a>
                    <a className='text-2xl lg:text-xl' rel="noreferrer" target='_blank' href="https://www.facebook.com/safwan.bin.7">
                        <BsFacebook />
                    </a>
                    <a className='text-2xl lg:text-xl' rel="noreferrer" target='_blank' href="https://www.instagram.com/safwan.bin/">
                        <BsInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;