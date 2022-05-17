import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numCiics, setNumClics] = useState(0); 

  //Declaracion de la funcion de Clic
  const manejarClic = () =>{
    setNumClics(numCiics + 1);
  };

  const reiniciarContador = () =>{
    setNumClics(0)
  };

  return (
    <div className='App'>
      <div  className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numCiics= {numCiics} />
        <Boton 
          texto='Clic'
          esBotonDeClic = {true}
          manejarClic = {manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic = {false}
          manejarClic = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
