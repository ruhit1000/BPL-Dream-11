import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';

const App = () => {
  return (
    <>
      <header className='w-[97%] lg:container mx-auto'>
        <NavBar />
        <Banner />
      </header>
    </>
  );
};

export default App;