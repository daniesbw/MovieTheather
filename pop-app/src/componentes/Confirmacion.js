import React from "react";
import { useNavigate } from 'react-router-dom';
import "../hoja-de-estilo/Confirmacion.css"
function Confirmacion() {
    const navigate = useNavigate();
    const irPerfil = () => {
        navigate('/Perfil');
    }

    const regresar = () => {
        navigate('/CarteleraGlobal');
    }

    return (
        <div className="principal-confirmacion">
             <div className="navegateBar-Sign">
               
            </div>

            <img
                className="logo-confirmacion"
                src={require("../imagenes/pop blanco.png")}
            />

            <h1 className="h1-confirmacion">GRACIAS POR TU COMPRA</h1>

            <button className="Salir"  onClick={() => regresar()} >
                Salir
            </button>

            <h2 className="h2-confirmacion">
                Hemos enciado al correo su factura
            </h2>

            <footer className="footer-confirmacion">
                <img
                    className="claqueta-confirmacion"
                    src={require("../imagenes/claqueta.png")}
                />
                <img
                    className="usuario-confirmacion"
                    onClick={() => irPerfil()}
                    src={require("../imagenes/usuario.png")}
                />
                <img
                    className="gps-confirmacion"
                    src={require("../imagenes/gps.png")}
                />

            </footer>

        </div>
    );
}

export default Confirmacion;

