import React from "react";
import "../hojas-de-estilo/boton.css"
 
function Boton (props) {
    const   esOperador = valor =>{
        return  isNaN(valor) && (valor = `=`) && (valor = `+`);}
    return (
        <div
        onClick={()=>props.manejarClick(props.children)}
        className={`butom-cont ${esOperador(props.children) ? `operador` : ""}`.trimEnd()}>
            {props.children}
        </div>
    )
}
export default Boton;