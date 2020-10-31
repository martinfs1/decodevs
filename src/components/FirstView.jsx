import React from 'react';
import '../css/FirstView.css'
import Pantallas from "../img/Pantallas.svg"
import { NavBar } from './NavBar';

const FirstView = () => {
  return (
    <>
      <NavBar />
      <div className="imgBg d-flex container-fluid align-items-center">
        <div className="row mx-0">
          <div className="col-md-8">
            <img className="pantallas img-fluid" src={Pantallas} alt="Pantallas" />
          </div>
          <div className="col-md-4">
            <h1 className="title"> &#60;Hablamos/&#62; tu mismo idioma</h1>
            <p className="title">Escuchamos tus inconvenientes y desarrollamos una solución adecuada a tu proyecto.</p>
            <h1 className="title">Creamos tu aplicación</h1>
            <p className="title">Para todas tus pantallas. El mundo digital de hoy requiere disponibilidad en todos los soportes.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstView;