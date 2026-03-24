import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ players, ...rest }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                players.map(player => <PlayerCard key={player.playerId} player={player} {...rest} />)
            }
        </div>
    );
};

export default AvailablePlayers;