import React from "react";
import "../hojas-de-estilo/botonClear.css"
 
function BotonClear (props) {
    return (
 <div 
 onClick={props.manejarClear}
 className="clear">{props.children
 } </div>
    )}
export default BotonClear;