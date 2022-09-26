import React from "react";
import "../hoja-de-estilo/Resumen.css";
import { useNavigate } from "react-router-dom";

function Resumen() {


    const navigate = useNavigate();

    const irConfirmacion = () => {
        navigate('/Confirmacion');
    }
    return (
        <div className="principal">
            <div className="navegateBar">
                <h1 className="navegate-h1">ROCK PAPER SCISSORS</h1>
            </div>
            
            
            <div className="resumen">
                <h1 className="resumen-t">RESUMEN</h1>
            </div>

            <div className="detalles">
                <div className="exact-location-m">
                    <h1 className="hnd-location">HONDURAS - CITYMALL TEGUCIGALPA</h1>
                    <h1 className="small-text">3er Nivel del Centro Comercial City Mall Tegucigalpa</h1>
                </div>
                <div className="top-detalles">
                    <h1 className="dtl">2D</h1>
                    <h1 className="dtl">SUB</h1>
                    <h1 className="h1-sillas">SILLAS : TRADICIONALES</h1>
                </div>
                <div className="bts-horario-2">
                    <h1 className="h1-sillas">HORA: </h1>
                    <button className="bt-horario-info">21:00</button>
                </div>
                <div className="sala-d"><h1 className="h1-sillas">SALA 2</h1></div>
                <div className="asientos-dibujo">
                    <h1 className="h1-sillas">ASIENTOS: </h1>
                    <img className="seats"src={require("../imagenes/silla.png")}/>
                    <img className="seats"src={require("../imagenes/silla.png")}/>
                    <img className="seats"src={require("../imagenes/silla.png")}/>
                </div>

            </div>

            <h1 className="h1-pago">FORMA DE PAGO</h1>
            <div className="met-pago">
                <h1 className="h1-pago">Método de Pago: </h1>
                <h1 className="pago-info">VISA</h1>
            </div>
            <div className="met-pago">
                <h1 className="h1-pago">Tarjeta: </h1>
                <h1 className="pago-info"> **** 0876</h1>
            </div>
            <div className="met-pago">
                <h1 className="h1-pago">Vencimiento: </h1>
                <h1 className="pago-info">05/2026</h1>
            </div>

            <div className="confirmar-pago">
                <button className="bt-pago" onClick={() => irConfirmacion()}>CONFIRMAR</button>
            </div>

            <footer>
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

export default Resumen;