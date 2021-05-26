import React, { useEffect } from 'react';
import './App.css';
import Player from './Piano/AudioPlayer'

function App() {
  const player = Player();

  useEffect(() => {
    player.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick = () => {
    player.playNote("C4");
  }; 

  return (
    <div className="app-container">
      <button onClick={handleClick}>Play</button>
    </div>
  );
}

export default App;
