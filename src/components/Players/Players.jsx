import React, { Suspense, use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';



const Players = ({ playersPromise, setMoney, money }) => {
    const promiseRes = use(playersPromise);
    const players = promiseRes.data;

    const [selectedTab, setSelectedTab] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleSelectedPlayers = (player) => {
        setSelectedPlayers(prevPlayers => [...prevPlayers, player]);
    }

    const handleSelectedPlayersRemove = (player) => {
        setSelectedPlayers(prevPlayers => prevPlayers.filter(p => p.playerId !== player.playerId));
    }

    return (
        <div className='mt-20'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-3xl mb-8'>{selectedTab === 'available' ? 'Available Players' : `Selected Players (${selectedPlayers.length}/${players.length})`}</h2>
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
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
            {
                selectedTab === 'available' ? <AvailablePlayers players={players} setMoney={setMoney} money={money} handleSelectedPlayers={handleSelectedPlayers} /> : <SelectedPlayers handleSelectedPlayersRemove={handleSelectedPlayersRemove} players={selectedPlayers} />
            }
        </div>
    );
};

export default Players;