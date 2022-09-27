import React from "react";
import "../hoja-de-estilo/Perfil.css";
import { useNavigate } from 'react-router-dom';

function Perfil() {

    const navigate = useNavigate();

    const regresar = () => {
        navigate('/login');
    }
    return (
        <div className="principal">
            <div className="navegateBar">
                <h1 className="navegate-h1">PERFIL</h1>
            </div>
            
            
            <div className="name-and-pic">
                <img 
                    className="profile-pic" 
                    src={require("../imagenes/profile-pic.jpg")}
                />
                <h1 className="profile-name"></h1>
            </div>

            <div className="botones">
                <button className="bts">Editar Perfil</button>
                <button className="bts">Formas de Pago</button>
                <button className="bts">Registro de Compras</button>
                <button className="bts">Privacidad y Seguridad</button>
                <button className="bts">Ayuda y Soporte Técnico</button>
                <button onClick={() => regresar()} className="bts" >Cerrar sesión</button>
            </div>

            <footer className="footer-perfil">
                <img
                    className="claqueta"
                    src={require("../imagenes/claqueta.png")}
                />
                <img
                    className="usuario"
                    src={require("../imagenes/usuario.png")}
                />
                <img
                    className="gps"
                    src={require("../imagenes/gps.png")}
                />

            </footer>


        </div>


    );
}

export default Perfil;