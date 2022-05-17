import React from "react";
import '../hojas-de-estilo/Pantalla.css';

//Esta es otra forma de crear un componente en React
const Pantalla = ({input}) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;