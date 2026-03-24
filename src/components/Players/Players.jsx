import React, { Suspense, use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';



const Players = ({ playersPromise }) => {
    const promiseRes = use(playersPromise);
    const players = promiseRes.data;

    const [selectedTab, setSelectedTab] = useState('available');

    return (
        <div className='mt-20'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-3xl mb-8'>{selectedTab === 'available' ? 'Available Players' : `Selected Players (0/${players.length})`}</h2>
                <div className='btn-group'>
                    <button 
                        className={`btn ${selectedTab === 'available' ? 'bg-[#E7FE29]' : 'bg-[#ccc]'} rounded-r-none rounded-xl font-medium`} 
                        onClick={() => setSelectedTab('available')}
                    >
                        Available
                    </button>
                    <button 
                        className={`btn ${selectedTab === 'selected' ? 'bg-[#E7FE29]' : 'bg-[#ccc]'} rounded-l-none rounded-xl font-medium`} 
                        onClick={() => setSelectedTab('selected')}
                    >
                        Selected (0)
                    </button>
                </div>
            </div>
            <Suspense>
                <AvailablePlayers players={players} />
            </Suspense>
        </div>
    );
};

export default Players;