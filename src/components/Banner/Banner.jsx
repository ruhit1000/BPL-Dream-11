import React from 'react';
import bannerImg from '../../assets/banner-main.png';
import bannerBg from '../../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div className='bg-neutral text-base-100 text-center py-16 rounded-3xl' style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: 'cover' }}>
            <div className='flex justify-center'>
                <img src={bannerImg} alt="Banner" />
            </div>
            <div className='mt-6'>
                <h1 className='font-bold text-[40px]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-2xl mt-4 opacity-70'>Beyond Boundaries, Beyond Limits</p>
                <button className='btn bg-yellow-500 hover:bg-yellow-600 text-neutral mt-6'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;