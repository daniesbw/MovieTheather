import './App.css';
import AppPrincipal from "./componentes/AppPrincipal.js";
import SignUp from './componentes/SignUp';
import CarteleraGlobal from './componentes/CarteleraGlobal';
import CarteleraFav from './componentes/CarteleraFav';
import LogIn from './componentes/LogIn';
import SelectCinema from './componentes/SelectCinema.js';
import Terminos from './componentes/terminos';
import Categoria from './componentes/Categorias';
import Perfil from "./componentes/Perfil";
import Confirmacion from './componentes/Confirmacion';
import InfoPelicula from './componentes/InfoPelicula';
import Resumen from './componentes/Resumen';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='pantalla'>
      <Router>
        <Routes> 
          <Route path="/" element={<AppPrincipal/>}></Route>
          <Route path="/terminos" element={<Terminos/>}></Route>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/Crear-cuenta' element={<SignUp/>}></Route>
          <Route path='/CarteleraGlobal' element={<CarteleraGlobal/>}></Route>
          <Route path='/CarteleraFav' element={<CarteleraFav/>}></Route>
          <Route path='/Select_cinema' element={<SelectCinema/>}></Route>
          <Route path='/Categorias' element={<Categoria/>}></Route>
          <Route path='/Perfil' element={<Perfil/>}></Route>
          <Route path='/Confirmacion' element={<Confirmacion/>}></Route>
          <Route path='/InfoPelicula' element={<InfoPelicula/>}></Route>
          <Route path='/Resumen' element={<Resumen/>}></Route>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
