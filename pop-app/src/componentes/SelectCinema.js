import { React, useState } from "react";
import "../hoja-de-estilo/SelectCinema.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SelectCinema() {
    const navigate = useNavigate();
    const ingresar = () => {
        navigate('/CarteleraGlobal');
    }

    var [ubicacion, aa] = useState("");

    var ubicacionSeleccionada = (pUbicacion) => {
        ubicacion = pUbicacion;
        alert("Ubicacion seleccionada es: " + ubicacion);
    }

    return (
        <div className="principal">
            <div className="navegateBar">
                <img
                    className="logo"
                    src={require("../imagenes/pop.png")}
                />
            </div>

            <h1 className="h1-t">CINES FAVORITOS</h1>

            <p className="text-1">DEBES ESCOGER MÍNIMO UNO</p>

            <div className="cinepolis">
                <button className="cinepolis-select"><img className="CINEPOLIS-LOGO" src={require("../imagenes/CINEPOLIS-LOGO.png")} /></button>
                <div class="dropdown-content">
                    <a onClick={() => ubicacionSeleccionada('Cinépolis Cascadas Mall')} >Cinépolis Cascadas Mall</a>
                    <a onClick={() => ubicacionSeleccionada('Cinépolis Mall Premier Tegucigalpa')}>Cinépolis Mall Premier Tegucigalpa</a>
                </div>
            </div>

            <div className="cinemark">
                <button className="cinemark-select"><img className="Cinemark_logo" src={require("../imagenes/cinemark_logo.png")} /></button>
                <div class="dropdown-content1">
                    <a onClick={() => ubicacionSeleccionada('Cinemark Mall Multiplaza Tegucigalpa')} href="#">Cinemark Mall Multiplaza Tegucigalpa</a>
                    <a onClick={() => ubicacionSeleccionada('Cinemark Mall Citymall Tegucigalpa')} href="#">Cinemark Mall Citymall Tegucigalpa</a>
                </div>
            </div>
            <div className="metrocinemas">
                <button className="metrocinemas-select"><img className="metrocinemas-logo" src={require("../imagenes/metrocinemas-logo.png")} /></button>
                <div class="dropdown-content2">
                    <a onClick={() => ubicacionSeleccionada('MetroCinemas Metromall')} href="#">MetroCinemas Metromall</a>
                    <a onClick={() => ubicacionSeleccionada('MetroCinemas Novacentro')} href="#">MetroCinemas Novacentro</a>
                    <a onClick={() => ubicacionSeleccionada('Metromall Colonia Las Americas')} href="#">Metromall Colonia Las Americas</a>
                </div>
            </div>



            <button onClick={() => ingresar()} className="Sign-up">CONFIRMAR</button>
        </div>
    );
}

export default SelectCinema;