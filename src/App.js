import Boton from "./compo/boton"
import './App.css';
import Pantalla from "./compo/input.js"
import BotonClear from "./compo/clear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const  [input, setinput] = useState(" ")
  const agregarInput = valor =>
  {setinput(input + valor);
  }
  const calcularResultado = ()=>
  { if(input){setinput((evaluate(input)))}
else {alert("no ha ingresado ningun numero")}}
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='calcu'>
           <Pantalla input={input} className="Pantalla" />
          <div className='fila'> 
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton> 
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton> 
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton></div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton> 
            <Boton manejarClick={agregarInput}>9</Boton> 
            <Boton manejarClick={agregarInput}>*</Boton></div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton></div>
          <div className='fila'>
            <BotonClear manejarClear={()=> setinput(" ")} >clear</BotonClear></div>
        </div>
      </div>
    </div>
  );
}

export default App;
