import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const SelectedPlayerCard = ({ player, handleSelectedPlayersRemove }) => {
    return (
        <div className='border border-base-300 bg-slate-100 rounded-2xl p-6 flex items-center gap-6'>
            <div className='w-20 h-20 bg-slate-300 rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover object-top' src={player.image} alt={player.name} />
            </div>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <h3 className='font-semibold text-2xl'>{player.name}</h3>
                    <p className='opacity-60'>Batting Type: {player.battingType}</p>
                    <p className='opacity-60'>Bowling Type: {player.bowlingType}</p>
                </div>
                <div>
                    <button className='btn btn-ghost rounded-full' onClick={() => handleSelectedPlayersRemove(player)}><FaRegTrashAlt color='red' /></button>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayerCard;