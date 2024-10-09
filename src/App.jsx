import { useState } from 'react';

import Header from './Components/Header';
import Intro from './Sections/Intro';
import GuessGame from './Sections/GuessGame';

import './Styles/main.css';

import Lorem from './Components/Lorem';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Intro />
      <main>
        <GuessGame />
        <Lorem />
      </main>
    </div>
  )
}

export default App
