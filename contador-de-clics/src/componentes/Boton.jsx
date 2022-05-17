import React from 'react';
import '../hojas-de-estilo/Boton.css'

//Aqui se ocupo desestructuracion, esto quiere decir que no pasamos el props
function Boton({texto, esBotonDeClic,manejarClic}){
  return(
    <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } 
      onClick = {manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;