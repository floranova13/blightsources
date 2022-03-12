import React from 'react';
import Wave from 'react-wavify';
import './App.css';

function App() {
  return (
    <div className='App h-auto'>
      <Wave
        className='wave absolute left-100 top-25 -z-50'
        fill='#f79902'
        paused={false}
        options={{
          height: 4,
          amplitude: 12,
          speed: 0.25,
          points: 3,
        }}
      />
      <h1 className='className="text-3xl font-bold underline"'>Meow</h1>
    </div>
  );
}

export default App;
