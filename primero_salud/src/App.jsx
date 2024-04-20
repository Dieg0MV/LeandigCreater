import Tops from './componentes/top.tsx'
import './App.css';
import React from 'react-icons';

function App() {
  return (
    <body className="App">
      <header className="App-header">
          <Tops className="barratop"/>
      </header>
      
      <div className='datosg'>
        <h1>Enfermería <br/> Auxiliar</h1>
        <img src="./componentes/statics/LogoPS.png" alt="" />
        <h3>
        Todos nuestros programas cuentan con aval de la STPS 
        y son impartidos <br/> por profesionales certificados
        </h3>
        <button className='about'>contactanos </button>        
      </div>
      <div className='info'>
        <h2> Objetivos </h2 >
        <p>Al Terminar El Diplomado El Estudiante Desarrollará Los Conocimientos Teórico-Prácticos Con Enfoque Hospitalario, 
          Para Fomentar Y Fortalecer La Calidad De Atención Al Paciente A Través De Una Práctica Humanística, 
          Siendo Capaz De Actuar Ante Una Emergencia Al Solucionar Problemas Con Ética Y Responsabilidad, 
          Así Como Desarrollar Acciones De Cuidado Y Primeros Auxilios</p>
      </div>
  </body>
  );
}

export default App;
