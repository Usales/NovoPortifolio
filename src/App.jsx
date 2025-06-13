import React from 'react';
import TelaInicio from './Componentes/TelaInicio/TelaInicio.js';
import TelaMeio from './Componentes/TelaMeio/TelaMeio.js';
import Particles from './Componentes/Efeitos/Particles.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="particles-container">
        <Particles
          particleCount={25000}
          particleSpread={10}
          speed={0.1}
          particleColors={['#ff4500', '#ff8c00', '#ffd700']}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>
      <TelaInicio />
      <TelaMeio />
    </div>
  );
};

export default App; 