import React from 'react';
import './App.css';
import freeCodeCamp from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src = {freeCodeCamp}
          className ='freecodecamp-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>

      </div>
    </div>
  );
}

export default App;
