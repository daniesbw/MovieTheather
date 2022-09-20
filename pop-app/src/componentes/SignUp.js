import { React, useState } from "react";
import "../hoja-de-estilo/SignUp.css";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";



function SignUp() {
    var [validarCheck, setCheck] = useState(false);
    var [nameReg, setNameReg] = useState("");
    var [apellidoReg, setApellidoReg] = useState("");
    var [usernameReg, setUsernameReg] = useState("");
    var [correoReg, setCorreoReg] = useState("");
    var [passwordReg, setPasswordReg] = useState("");


    const [passwordConfirm, setMessage] = useState('');

    const getContrasenia = event => {
        setMessage(event.target.value);
        console.log('value is:', event.target.value);
    };

    const handleChange = e => {
        if (e.target.checked) {
            console.log('Acepto los terminos');
            setCheck(true);
            validarCheck = true;
        }
    };


    const validaciones = () => {
        if(nameReg,correoReg,passwordReg,passwordConfirm,apellidoReg,usernameReg ===""){
            alert('Uno de los campos está vacio');
        }else if ((/[^a-zA-Z]/.test(nameReg)) && (/[^a-zA-Z]/.test(apellidoReg))) {
            alert('No se puede poner caracteres especiales en el nombre o el apellido');
        } else if (passwordReg != passwordConfirm) {
            alert('La contraseña debe ser igual al de la confirmación');
        } else if (!correoReg.includes("@")) {
            alert('El correo debe incluir una "@"');
        } else if (validarCheck == false) {
            alert('Debe aceptar los términos de uso');
        } else{           
            validarRepetidos();
        }
    }

    const navigate = useNavigate();

    const ingresar_sign_up = () => {
        navigate('/login');
    }

    const terminos = () => {
        navigate('/Terminos');
    }

    const [framework, setFramework] = useState(1);

    const cambioRadioFramework = e => {
        setFramework(e.target.value);
    }

   

    const register = () => {

        alert('Cuenta creada exitosamente!');
        Axios.post("http://localhost:3001/register", {
            nombre: nameReg,
            apellido: apellidoReg,
            username: usernameReg,
            correo: correoReg,
            password: passwordReg
        })

        navigate('/login');

    }

    const validarRepetidos = () => {
        Axios.get("http://localhost:3001/getUserCorreo").then((response) => {
            if (!(response.data.find(item => item.username === usernameReg))) {
                if (!(response.data.find(item => item.correo === correoReg))) {

                    register();
                    alert("usuario y correo validos");
                } else {
                    alert("Correo repetido");
                }
            } else {
                alert("Usuario repetido");
            }

        })
    }

    return (
        <div className="principal-Sign">
            <div className="navegateBar-Sign">
                <img
                    className="logo"
                    src={require("../imagenes/pop.png")}
                />
            </div>

            <h1 className="h1-t">REGISTRARME</h1>
            <input type={"text"} onChange={(e) => {
                setNameReg(e.target.value);
            }} className="name" placeholder="     Nombre"></input>


            <input type={"text"} onChange={(e) => {
                setApellidoReg(e.target.value);
            }}
                className="last-name" placeholder="    Apellido"></input>
            <form className="datos-llenar">
                <input type={"text"} onChange={(e) => {
                    setUsernameReg(e.target.value);
                }} className="username" placeholder="     Usuario"></input>

                <input type={"text"} onChange={(e) => {
                    setCorreoReg(e.target.value);
                }} className="Email" placeholder="    Correo"></input>

                <input type={"text"} onChange={(e) => {
                    setPasswordReg(e.target.value);
                }} className="Password" placeholder="     Contraseña"></input>

                <p className="text-1-sign">
                    Utilice al menos ocho caracteres con una combinación
                    de letras, números y símbolos.
                </p>
                <input type={"text"} className="Password" placeholder="     Confirmar Contraseña" onChange={getContrasenia} value={passwordConfirm} id="password-confirm"></input>
                <div className="buttonss">
                    <input type="checkbox" className="checkbox-sign-terminos"
                        onChange={handleChange} id="child" name="age" />
                    <label className="as" for="child">Acepto a los términos de uso y privacidad <br></br><a className="a-termineos-sign" onClick={() => terminos()}> (Leer los términos de uso y privacidad)</a></label>

                </div>

                <button onClick={() =>  validaciones() } className="Sign-up-S">REGISTRAR</button>



            </form>

            <div className="resto">
                <hr className="line-breaks-sign" />

                <button className="Google-sign">
                    <img
                        className="logo-google-sign"
                        src={require("../imagenes/PngItem_2599335.png")}
                    />
                    Registrarme con Gmail
                </button>

                <button className="Facebook-sign">
                    <img
                        className="logo-facebook-sign"
                        src={require("../imagenes/facebook.png")}
                    />
                    Registrarme con Facebook
                </button>
                <h1 className="h2-login-sign">Prefiero iniciar sesión</h1>
                <button onClick={() =>ingresar_sign_up()} className="log-in-sign-button">INICIAR</button>
            </div>


        </div>
    );
}

export default SignUp;