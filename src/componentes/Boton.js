import React from 'react';
import '../hojas-de-estilos/boton.css'

// texto, esbotondeclick,manejarclick ==> son los props 

function Boton({ texto, esBotonDeClic, manejarClic }){
    return(
        <button
        //operador ternario 
        className={ esBotonDeClic ? 'boton-clic' :'boton-reiniciar' }
        
        //onClick es un EVENT LISTENER 
        onClick={manejarClic}>
        {texto}
        </button>

    );
}

// exportacion por defecto 
export default Boton;