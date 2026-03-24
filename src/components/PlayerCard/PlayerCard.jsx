import React from 'react';
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

const PlayerCard = ({ player }) => {
    return (
        <div className='p-6 border border-base-300 rounded-lg bg-white shadow-md'>
            <div className='h-60 rounded-lg overflow-hidden bg-slate-100'>
                <img className='w-full h-full object-cover object-top' src={player.image} alt={player.name} />
            </div>
            <div className='mt-6 pb-4 border-b-2 border-base-300 mb-4'>
                <div className='flex items-center gap-4'>
                    <FaUser color='gray' />
                    <h3 className='font-semibold text-xl'>{player.name}</h3>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center text-gray-400'>
                        <IoFlag />
                        <p className='text-gray-600'>{player.country}</p>
                    </div>
                    <div className='py-2 px-3 bg-base-200 rounded-lg'>
                        <p className='text-gray-600 text-sm'>{player.role}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='font-bold'>Rating: {player.rating}</p>
                <p className='text-gray-600 text-sm'>Batting Type: {player.battingType}</p>
                <p className='text-gray-600 text-sm'>Bowling Type: {player.bowlingType}</p>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Price: ${player.price.toLocaleString()}</p>
                    <button className='btn btn-ghost text-sm font-light'>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;