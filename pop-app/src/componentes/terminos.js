import React from "react";
import "../hoja-de-estilo/terminos.css";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Terminos() {
    const navigate= useNavigate();
    
    const ingresar_regresar=()=>{
        navigate('/Crear-cuenta');
    }
    
    return (
        <div className="principal">
            
            <img
                className="logo"
                src={require("../imagenes/pop blanco.png")}
            />

            <h1 className="h1-terminos">TÉRMINOS DE PRIVACIDAD</h1>

            <p className="p-terminos">▪ En nuestra Política de privacidad
                se describe cómo nosotros y algunas
                de las empresas con las que
                trabajamos recopilamos, utilizamos,
                compartimos y protegemos la
                información relacionada con
                nuestros servicios de telefonía
                celular, nuestro sitio web y cualquier
                software suministrado o relacionado
                con los servicios de POP
                (denominados de forma conjunta
                el "Servicio"), así como las opciones
                que tienes para la recopilación
                y utilización de la información.<br></br>
                ▪ Al utilizar nuestro Servicio,
                entiendes y aceptas que te
                proporcionamos una plataforma
                para comprar ticket o reservas de
                asientos.<br></br>
                ▪ Nuestra Política se aplica a
                todos los visitantes, usuarios y
                otras personas que accedan al
                Servicio ("Usuarios").
            </p>

            <button className="acepto" onClick={() => ingresar_regresar()} >CERRAR</button>
        </div>

    );
}

export default Terminos;