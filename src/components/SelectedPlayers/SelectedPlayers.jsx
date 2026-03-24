import React from 'react';
import EmptyPlayerMessage from '../SelectedPlayerCard/EmptyPlayerMessage';
import SelectedPlayerCard from '../SelectedPlayerCard/SelectedPlayerCard';

const SelectedPlayers = ({ players, handleSelectedPlayersRemove }) => {
    console.log(players);
    return (
        <div className='space-y-6'>
            {
                players.length === 0 ? <EmptyPlayerMessage /> : players.map(player => <SelectedPlayerCard handleSelectedPlayersRemove={handleSelectedPlayersRemove} key={player.playerId} player={player} />)
            }
        </div>
    );
};

export default SelectedPlayers;