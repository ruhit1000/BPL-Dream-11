import React from 'react';
import bgShadow from '../../assets/bg-shadow.png';

const Newsletter = () => {
    return (
        <div className='border border-base-100 rounded-3xl p-6 max-w-5xl mx-auto bg-[#ffffff1e]'>
            <div className='py-22 max-w-5xl mx-auto text-center rounded-3xl bg-base-100' style={{ backgroundImage: `url(${bgShadow})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h2 className='font-bold text-3xl mb-4'>Subscribe to Our Newsletter</h2>
                <p className='text-xl opacity-70 mb-6'>Get the latest updates and news right in your inbox!</p>
                <input type="email" placeholder="example@site.com" className="input" />
                <button className="btn btn-primary ml-4 mt-4 sm:mt-0">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;