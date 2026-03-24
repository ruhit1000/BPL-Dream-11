import React, { Suspense } from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import axios from 'axios';

const playersPromise = axios.get('/players.json');

const App = () => {
  return (
    <>
      <header className='w-[97%] lg:container mx-auto'>
        <NavBar />
        <Banner />
      </header>

      <main className='w-[97%] lg:container mx-auto'>
        <Suspense fallback={<span className="loading loading-dots loading-xl block mx-auto"></span>}>
          <AvailablePlayers promise={playersPromise} />
        </Suspense>
      </main>
    </>
  );
};

export default App;