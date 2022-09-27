import React from "react";
import "../hoja-de-estilo/Sinopsis.css";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, props } from "react";
function Sinopsis() {
    const navigate = useNavigate();
    const location = useLocation();

    const { state } = useLocation();
    var nombreback = state.title;
    var sinopmain = state.sinop;
    let linkmg = ("../imagenes/" + state.imagenRev + ".png");
    var genero = state.gender;
    var duracion = state.dura;
    var rating = state.rate;
    var directorr = state.director1;

    const irResumen = () => {
        navigate('/InfoPelicula', {state:{dura:duracion,gender:genero,rate:rating,sinop:sinopmain,title:nombreback,imagenRev:linkmg,director1:directorr}});
    }


    return (
        <div className="Principal-sinopsis">
            <div className="div-sinopsis">
                <h1 className="sinopsis-title">Sinopsis: </h1>
                <p className="sinopsis-text">{sinopmain}</p>
            </div>

            <div className="div-director">
                <h1 className="sinopsis-director">Director: </h1>
                <p className="sinopsis-director-text">{directorr}</p>
            </div>

            <button className="button-sinopsis"  onClick={() => irResumen()}>Regresar</button>
        </div>
    );
}

export default Sinopsis;