import React from 'react';
import navbarLogo from '../../assets/logo.png';
import dollarImg from '../../assets/dollar1.png';

const NavBar = () => {
    return (
        <div className='container mx-auto flex items-center justify-between py-4'>
            <div>
                <img src={navbarLogo} alt="Logo" />
            </div>
            <div className='flex items-center'>
                <ul className='flex gap-12 opacity-70 mr-12'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className='flex items-center border border-gray-300 rounded-lg px-4 py-2 gap-2 bg-gray-100'>
                    <p><span>0</span> Coins</p>
                    <img src={dollarImg} alt="Dollar Icon" />
                </div>
            </div>
        </div>
    );
};

export default NavBar;