import React from 'react';
import '../css/FirstView.css'
// import codigoBackground from '../img/codigoBackground.jpg'

const FirstView = () => {
  return (
    <div className="imgBackground">
      {/* <img src={codigoBackground} alt="imagen de fondo" /> */}
      <h1 className="title">
        &#60;De <br />
        código <br />
        Hablamos/&#62;  <br />
        Escribimos/&#62; <br />
        Creamos/&#62; <br />
      </h1>
    </div>
  );
}

export default FirstView;