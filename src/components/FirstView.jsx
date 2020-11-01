import React from 'react';
import '../css/FirstView.css'
import Pantallas from "../img/Pantallas.svg"

const FirstView = () => {
  return (
    <>
      <div className="imgBg d-flex container-fluid align-items-center">
        <div className="row mx-0">
          <div className="col-md-8">
            <img className="pantallas img-fluid pb-3 pt-5" src={Pantallas} alt="Pantallas" />
          </div>
          <div className="col-md-4 flex-column pt-4">
            <div>
              <h2 className="title pt-3 text-center"> &#60;Hablamos/&#62; tu mismo idioma</h2>
              <p className="title text-center">Escuchamos tus inconvenientes y desarrollamos una solución adecuada a tu proyecto.</p>
            </div>
            <div>
              <h2 className="title text-center">Creamos tu aplicación</h2>
              <p className="title text-center">Para todas tus pantallas. El mundo digital de hoy requiere disponibilidad en todos los soportes.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstView;