import React from "react";
import "../hoja-de-estilo/AppPrincipal.css";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function AppPrincipal() {
  const navigate= useNavigate();
    const ingresar=()=>{
        navigate('/Crear-cuenta');
    }
  
  return (

    <div className="texto-bienvenida">


      <h1 className="text">BIENVENIDO<br></br>A</h1>
      <img
        className="foto-logo"
        src={require("../imagenes/pop.png")}
        alt="Logo de la aplicacion" />

        <button onClick={()=>ingresar()} className="siguiente">Next</button>

    </div>

  );
}

export default AppPrincipal;