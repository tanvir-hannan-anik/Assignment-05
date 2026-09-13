import React from 'react';
import logoText from '../assets/logo-text.png';

const Nav = () => {
    return (
        <div className='cointainer flex justify-around items-center p-6'>
            <div>
                <img src={logoText} alt="" />
            </div>
            <div >
                <ul className='flex gap-4 justify-between items-center'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div >
                <button className='m-3'>Sign In</button>
                <button className='bg-[#D91B7E] text-white border-2 rounded-full p-3'>Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;