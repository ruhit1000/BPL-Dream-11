import React, { Suspense, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Players from './components/Players/Players';
import axios from 'axios';


const playersPromise = axios.get('/players.json');

const App = () => {
  const [money, setMoney] = useState(100000000);

  return (
    <div className='w-[97%] lg:container mx-auto'>
      <header>
        <NavBar money={money} />
        <Banner setMoney={setMoney} />
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-dots loading-xl block mx-auto mt-10"></span>}>
          <Players playersPromise={playersPromise} setMoney={setMoney} money={money} />
        </Suspense>
      </main>
    </div>
  );
};

export default App;