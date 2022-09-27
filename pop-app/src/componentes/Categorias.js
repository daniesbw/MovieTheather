import { React, useState } from "react";
import "../hoja-de-estilo/Categorias.css";
import { useNavigate } from 'react-router-dom';
import Monopoly from '../imagenes/monopoly.jpg';
import Rock from '../imagenes/rock.jpg';
import AfterMovie from '../imagenes/after.jpg';
import RapidosMovie from '../imagenes/rapidos.jpg';

function CarteleraGlobal() {

    var duraciones = ['150 min', '90min', '130 min', '100 min', '125 min'];
    var generos = ['Romance', 'Comedia', 'Aventura', 'Accion', 'Accion'];
    var ratings = ['D', 'A', 'D', 'A', 'B'];
    var tittles = ['After', 'Monopoly', 'Piedra, Papel y tijeras', 'RAPIDOS Y FURIOSOS'];
    var directoresArr = ['Jenny Gage', 'Tim Story', 'Tom Holland', 'Justin Lin'];
    var arreglosinop = ['Tessa Young begins her freshman year of college by moving into her dorm room with the help of her mother, Carol, and her boyfriend, Noah. During this process she meets her new roommate Steph and Stephs boyfriend Tristan. The day after, Tessa shares a brief encounter with Stephs friend, Hard',
        'A trio of kids from Baltic Avenue discover that Charles Darrow, the inventor of Monopoly, hid a coded secret in the game that weve all been playing with for generations, setting them off on an adventure through the streets of Atlantic City, racing through forgotten underground railroads, the Boardwalk and more as theyre pursued by a near-bankrupt casino owner also competing to find Darrows hidden fortune.'
        , 'Peter "the Doll Maker" Harris returns to his ancestral family home after being released from the states hospital for the criminally insane - a "cured" man. Once inside the old house, anguished memories from a tortured childhood and ghostly visitations from his past victims shake Peters resolve.',
        'Dom Toretto vive una vida tranquila junto a Letty y su hijo, pero el peligro siempre regresa a su vida. En esta ocasión, el equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo: el hermano de Dom.'];
    var [duracion, setDura] = useState('82 min');
    var [genero, setGen] = useState('Accion');
    var [rating, setRating] = useState('');
    var [titulo, setTitulo] = useState('');
    var [imgpeli, setImg] = useState(AfterMovie);
    var [sinopsis, setSinop] = useState('Tessa Young begins her freshman year of college by moving into her dorm room with the help of her mother, Carol, and her boyfriend, Noah. During this process she meets her new roommate Steph and Stephs boyfriend Tristan. The day after, Tessa shares a brief encounter with Stephs friend, Hard',
        'A trio of kids from Baltic Avenue discover that Charles Darrow, the inventor of Monopoly, hid a coded secret in the game that weve all been playing with for generations, setting them off on an adventure through the streets of Atlantic City, racing through forgotten underground railroads, the Boardwalk and more as theyre pursued by a near-bankrupt casino owner also competing to find Darrows hidden fortune.')
    var [director, setDirector] = useState('Jenny Gage');





    const setSinopsisAfter = () => {
        setDura(duracion = '150 min');
        setGen(genero = 'Romance');
        setRating(rating = 'D');
        setSinop(sinopsis, arreglosinop[0]);
        setTitulo(titulo = 'After');
        setImg(imgpeli = AfterMovie);
        setDirector(director = 'Jenny Gage');
        irSinopsis();
    }
    const setSinopsisMonopoly = () => {
        setDura(duracion = '90 min');
        setGen(genero = 'Comedia');
        setRating(rating = 'A');
        setSinop(sinopsis, arreglosinop[1]);
        setTitulo(titulo = 'Monopoly');
        setImg(imgpeli = Monopoly);
        setDirector(director = 'Tim Story');
        irSinopsis();
    }
    const setSinopsisRock = () => {
        setDura(duracion = '130 min');
        setGen(genero = 'Aventura');
        setRating(rating = 'D');
        setSinop(sinopsis, arreglosinop[2]);
        setTitulo(titulo = 'Piedra, Papel y tijeras');
        setImg(imgpeli = Rock);
        setDirector(director = 'Tom Holland');
        irSinopsis();
    }
    const setSinopsisRapidos = () => {
        setDura(duracion = duraciones[3]);
        setGen(genero = generos[3]);
        setRating(rating = ratings[3]);
        setSinop(sinopsis, arreglosinop[3]);
        setTitulo(titulo = tittles[3]);
        setImg(imgpeli = "rapidos");
        setDirector(director = directoresArr[3]);
        irSinopsis();
    }


    const irSinopsis = () => {
        navigate('/InfoPelicula', { state: { dura: duracion, gender: genero, rate: rating, sinop: sinopsis, title: titulo, imagenRev: imgpeli, director: director } });
    }

    const navigate = useNavigate();

    const irPerfil = () => {
        navigate('/Perfil');
    }

    const irCineGlob = () => {
        navigate('/CarteleraGlobal');
    }

    const irCineFav = () => {
        navigate('/CarteleraFav');
    }

    return (
        <div className="principal">
            <div className="navegateBar">
                <h1 className="navegate-h1">CARTELERA</h1>
            </div>
            <div className="row">
                <div onClick={() => irCineFav()} className="column"><h1 className="h1-title-c">CINE FAVORITOS</h1><hr className="h1-hr-c"></hr></div>
                <div onClick={() => irCineGlob()} className="column"><h1 className="h1-title-c">CINE GLOBAL</h1><hr className="h1-hr-c"></hr></div>
                <div className="column"><h1 className="h1-title-selected-categorias">CATEGORÍAS</h1><hr className="h1-hr-s-categoria"></hr></div>
            </div>


            <div className="Estrenos">
                <h2>
                    INFANTILES
                </h2>

                <img
                    onClick={() => setSinopsisAfter()}
                    className="after"
                    src={require("../imagenes/after.jpg")}
                />
                <img
                    onClick={() => setSinopsisMonopoly()}
                    className="monopoly"
                    src={require("../imagenes/monopoly.jpg")}
                />
                <img
                    onClick={() => setSinopsisRock()}
                    className="rock"
                    src={require("../imagenes/rock.jpg")}
                />


            </div>
            <hr />
            <div className="Ofertas">
                <h2 >
                    TERROR
                </h2>
                <img

                    className="after"
                    onClick={() => setSinopsisAfter()}
                    src={require("../imagenes/after.jpg")}
                />
                <img
                    onClick={() => setSinopsisMonopoly()}
                    className="monopoly"
                    src={require("../imagenes/monopoly.jpg")}
                />
                <img
                    onClick={() => setSinopsisRock()}
                    className="rock-paper"
                    src={require("../imagenes/rock.jpg")}
                />
                <img
                    onClick={() => setSinopsisRapidos()}
                    className="rapidos"
                    src={require("../imagenes/rapidos.jpg")}
                />


            </div>
            <hr />
            <div className="preventa">
                <h2 >
                    AVENTURA
                </h2>


                <img
                onClick={() => setSinopsisRapidos()}
                    className="rapidos"
                    src={require("../imagenes/rapidos.jpg")}
                />

            </div>

            <footer className="footer-categorias">
                <img
                    className="claqueta"
                    src={require("../imagenes/claqueta.png")}
                />
                <img
                    className="usuario"
                    onClick={() => irPerfil()}
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

export default CarteleraGlobal;