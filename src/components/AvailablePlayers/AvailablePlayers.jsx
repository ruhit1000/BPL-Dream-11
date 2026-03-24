import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ promise }) => {
    const promiseRes = use(promise);
    const players = promiseRes.data;

    return (
        <div className='mt-20'>
            <h2 className='font-bold text-3xl mb-8'>Available Players</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    players.map(player => <PlayerCard key={player.playerId} player={player} />)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;