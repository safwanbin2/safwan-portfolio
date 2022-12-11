import React from 'react';
import safwan from '../../Assets/safwan.png';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { ImBlog } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid h-[250px] justify-between items-center my-3' style={{gridTemplateColumns: "1fr 2fr"}}>
            <div className='bg-[#FFE071] overflow-hidden w-[200px] h-[200px]' style={{borderRadius: "50%", border: "6px solid white"}}>
                <img className='-rotate-45' src={safwan} alt="" />
            </div>
            <div className=''>
                <h3 className='font-medium text-4xl text-white tracking-widest my-4'>Safwan Bin Ridwan</h3>
                <h5 className='font-medium tracking-widest my-4'>Web Developer | <Link to='/l2/blog' className='text-[#FFE071]'>Blog <ImBlog className='inline'/></Link></h5>
                <div className='flex justify-between items-center w-32 my-4'>
                    <a href="/">
                        <BsGithub />
                    </a>
                    <a href="/">
                        <BsLinkedin />
                    </a>
                    <a href="/">
                        <BsFacebook />
                    </a>
                    <a href="/">
                        <BsInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;