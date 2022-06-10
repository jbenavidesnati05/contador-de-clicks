// import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

// importando botones 

import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

// Uso de hugs useState 
import { useState} from 'react';

function App() {

const [numClics, setNumClics] = useState(0); 

//definir una funcion
    // funcion flecha 
    const manejarClick =()=>{
     setNumClics( numClics + 1);
    }


    const reiniciarContador =()=>{
      setNumClics(0);
    }
    return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de free code camp'/>
      </div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics}
      />

        <Boton
        texto = 'click'
        esBotonDeClic={true}
        manejarClic={manejarClick}
        />

        <Boton
        texto = 'reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
        

      </div>
    </div>
  );
}

export default App;
