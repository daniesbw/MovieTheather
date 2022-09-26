import { React, useState , useEffect} from "react";
import "../hoja-de-estilo/LogIn.css";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

function LogIn() {

    const navigate = useNavigate();

    const crearCuentaLog = () => {
        navigate('/Crear-cuenta');
    }

    var [correoLog, setCorreoLog] = useState("");
    var [passwordLog, setPasswordLog] = useState("");
    var [array, setArray] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            setArray(response.data);
        });
    }, []);

    const validarLogin = () => {
        alert(correoLog+'  '+passwordLog);
        if (array.find(item => item.correo == correoLog) && array.find(item => item.correo == correoLog).contrasenia == passwordLog) {
            
            alert('Bienvenido usuario: '+ correoLog) ;
            navigate('/Select_cinema');
        } else {
            alert('Login Incorrecto');
        }
    }

    return (
        <div className="principal-login">
            <div className="navegateBar">
                <img
                    className="logo"
                    src={require("../imagenes/pop.png")}
                />
            </div>

            <h1 className="h1-t">INICIAR SESIÓN</h1>

            <form className="datos-llenar">
                <input type={"text"} onChange={(e) => {
                    setCorreoLog(e.target.value);
                }} className="Email" placeholder="    Email"></input>
                <input type={"text"} onChange={(e) => {
                    setPasswordLog(e.target.value);
                }} className="Password" placeholder="     Password"></input>
                <button onClick={() => validarLogin()} className="log-in">INICIAR</button>
            </form>

            <hr className="line-breaks" />

            <button className="Google-login"><img
                className="logo-google"
                src={require("../imagenes/PngItem_2599335.png")}
            />Iniciar sesión con Gmail</button>

            <button className="Facebook-login">
                <img
                    className="logo-facebook"
                    src={require("../imagenes/facebook.png")}
                />
                Iniciar sesión con Facebook</button>
            <h2 className="h2-login">¿No tienes una cuenta?</h2>
            <button onClick={() => crearCuentaLog()} className="Sign-up-log">Registrar</button>
        </div>
    );
}

export default LogIn;

