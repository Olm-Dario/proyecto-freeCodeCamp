import React from "react";
import '../hojas-de-estilo/Contador.css'

function Contador({ numCiics }){
    return(
        <div className='contador'>
          {numCiics}
        </div>
    );
}

export default Contador;