// import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

// importando botones 

import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

function App() {

//definir una funcion
    // funcion flecha 
    const manejarClick =()=>{
      console.log('click');
    }


    const reiniciarContador =()=>{
      console.log('reiniciar');
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
      <Contador numClics='5'
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
