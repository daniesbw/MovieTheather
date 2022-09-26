import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState, props } from "react";
import "../hoja-de-estilo/InfoPelicula.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import AfterMovie from '../imagenes/after.jpg';



function InfoPelicula() {


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
    console.log(linkmg);
    const aaa = () => {
        alert('Sinopsis: '+sinopmain+"\n\n"+ "Director: "+directorr);
    }

    const irResumen = () => {
        navigate('/Resumen');
    }
    return (
        <div className="principal">
            <div className="navegateBar">
                <h1 className="navegate-h1">{nombreback}</h1>
            </div>


            <div className="foto_movie">
                <img
                    className="rock"
                    src={({AfterMovie})}
                />
                <h1 className="catg">{rating}</h1>
                <h1 className="duracion">{duracion}</h1>
            </div>

            <div className="mas">
                <button className="ver_mas"  onClick={() => aaa()}>VER MÁS</button>
            </div>

            <hr className="hr-info"></hr>

            <div className="row">
                <div className="column"><h1 className="h1-title">LUN.<br></br>15 AGO. 2022</h1><hr className="h1-hr"></hr></div>
                <div className="column"><h1 className="h1-title">MAR.<br></br>16 AGO. 2022</h1><hr className="h1-hr"></hr></div>
                <div className="column"><h1 className="h1-title">MIE.<br></br>17 AGO. 2022</h1><hr className="h1-hr"></hr></div>
            </div>

            <div className="exact-location">
                <h1 className="hnd-location">HONDURAS - CITYMALL TEGUCIGALPA</h1>
                <h1 className="small-text">3er Nivel del Centro Comercial City Mall Tegucigalpa</h1>
            </div>

            <div className="detalles">
                <div className="top-detalles">
                    <h1 className="dtl">2D</h1>
                    <h1 className="dtl">SUB</h1>
                    <h1 className="h1-sillas">SILLAS : TRADICIONALES</h1>
                </div>

                <h1 className="small-text">*Los horarios aquí expuestos representan el inicio de cada función</h1>
                <h1 className="h1-sillas">HORARIO DISPONIBLE</h1>
                <div className="bts-horario">
                    <button className="bt-horario-info">21:00</button>
                    <button className="bt-horario-info">16:00</button>
                    <button className="bt-horario-info">14:00</button>
                </div>
            </div>

            <button className="bt-r-compra-info" onClick={() => irResumen()} >REALIZAR COMPRA</button>


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


        </div >


    );
}

export default InfoPelicula;