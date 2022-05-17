import './App.css';
import FreeCodeCamp from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agragarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input!==''){
      setInput(evaluate(input));
    }
  };


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={FreeCodeCamp}
          className = 'freecodecamp-logo'
          alt = 'Logo de freeCodeCamp' />
      </div>
      <div className = 'contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className = 'fila'>
          <Boton manejarClic={agragarInput}>1</Boton>
          <Boton manejarClic={agragarInput}>2</Boton>
          <Boton manejarClic={agragarInput}>3</Boton>
          <Boton manejarClic={agragarInput}>+</Boton>          
        </div>
        <div className = 'fila'>
          <Boton manejarClic={agragarInput}>4</Boton>
          <Boton manejarClic={agragarInput}>5</Boton>
          <Boton manejarClic={agragarInput}>6</Boton>
          <Boton manejarClic={agragarInput}>-</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic={agragarInput}>7</Boton>
          <Boton manejarClic={agragarInput}>8</Boton>
          <Boton manejarClic={agragarInput}>9</Boton>
          <Boton manejarClic={agragarInput}>*</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agragarInput}>0</Boton>
          <Boton manejarClic={agragarInput}>.</Boton>
          <Boton manejarClic={agragarInput}>/</Boton>
        </div>
        <div className = 'fila'>
          <BotonClear manejarClear = {() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
