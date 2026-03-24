import React from 'react';
import navbarLogo from '../../assets/logo.png';
import dollarImg from '../../assets/dollar1.png';

const NavBar = ({ money }) => {
    return (
        <div className='flex items-center justify-between py-4'>
            <div className='pl-5'>
                <img src={navbarLogo} alt="Logo" />
            </div>
            <div className='flex items-center'>
                <ul className='hidden lg:flex gap-12 opacity-70 mr-12'>
                    <li className='btn btn-ghost'>Home</li>
                    <li className='btn btn-ghost'>Fixture</li>
                    <li className='btn btn-ghost'>Teams</li>
                    <li className='btn btn-ghost'>Schedules</li>
                </ul>
                <div className='flex items-center border border-gray-300 rounded-lg pl-4 pr-7 mr-5 py-2 gap-2 bg-gray-100'>
                    <p>{money.toLocaleString("en-IN")}</p>
                    <p>৳</p>
                    <img src={dollarImg} alt="Dollar Icon" />
                </div>
                <div className="lg:hidden drawer drawer-end ml-4">
                    <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-5" className="drawer-button btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-3">
                            {/* Sidebar content here */}
                            <li className='btn btn-active'>Home</li>
                            <li className='btn btn-ghost'>Fixture</li>
                            <li className='btn btn-ghost'>Teams</li>
                            <li className='btn btn-ghost'>Schedules</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;