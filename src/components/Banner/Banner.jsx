import React from 'react';
import bannerImg from '../../assets/banner-main.png';
import bannerBg from '../../assets/bg-shadow.png';

const Banner = ({ setMoney }) => {

    const handleClaimCredit = () => {
        const moneyToAdd = prompt('How much money do you need baby?');
        const moneyToAddNum = parseInt(moneyToAdd);
        if (!isNaN(moneyToAddNum) && moneyToAddNum > 0) {
            setMoney(prevMoney => prevMoney + moneyToAddNum);
            alert(`Added ৳ ${moneyToAddNum.toLocaleString("en-IN")} to your account!`);
        } else {
            alert('Please enter a valid positive number!');
        }
    }

    return (
        <div className='bg-neutral text-base-100 text-center py-16 rounded-3xl w-[97%] lg:container mx-auto' style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: 'cover' }}>
            <div className='flex justify-center'>
                <img src={bannerImg} alt="Banner" />
            </div>
            <div className='mt-6'>
                <h1 className='font-bold text-[40px]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-2xl mt-4 opacity-70'>Beyond Boundaries, Beyond Limits</p>
                <button onClick={handleClaimCredit} className='btn bg-yellow-500 hover:bg-yellow-600 text-neutral mt-6'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;