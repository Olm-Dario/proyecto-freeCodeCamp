import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        //src='../imagines/testimonio-emma.pgn'
        src={require(`../imagines/testimonio-${props.imagen}.png`)}
        alt='Foto de emma' />
        <div className="contenedor-texto-tesimonio">
          <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
    </div>
  );
}

export default Testimonio;