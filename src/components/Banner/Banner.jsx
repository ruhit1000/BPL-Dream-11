import React from 'react';
import bannerImg from '../../assets/banner-main.png';
import bannerBg from '../../assets/bg-shadow.png';

const Banner = ({ setMoney }) => {

    return (
        <>
            <div className='bg-neutral text-base-100 text-center py-16 rounded-3xl w-[97%] lg:container mx-auto' style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: 'cover' }}>
                <div className='flex justify-center'>
                    <img src={bannerImg} alt="Banner" />
                </div>
                <div className='mt-6'>
                    <h1 className='font-bold text-[40px]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-2xl mt-4 opacity-70'>Beyond Boundaries, Beyond Limits</p>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className='btn bg-yellow-500 hover:bg-yellow-600 text-neutral mt-6'>Claim Free Credit</button>
                </div>
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">How Much Credit Do You Want?</h3>
                    <div className='flex gap-2 mt-5'>
                        <button onClick={() => setMoney(prevMoney => prevMoney + 2000000)} className='btn btn-primary'>20 Lakh</button>
                        <button onClick={() => setMoney(prevMoney => prevMoney + 5000000)} className='btn btn-primary'>50 Lakh</button>
                        <button onClick={() => setMoney(prevMoney => prevMoney + 10000000)} className='btn btn-primary'>1 Crore</button>
                        <button onClick={() => setMoney(prevMoney => prevMoney + 50000000)} className='btn btn-primary'>5 Crore</button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Banner;