import React from 'react';
import '../css/FirstView.css'
import panorama from '../img/panorama.jpg'
import escritorio from '../img/escritorio.jpg'
import focos from '../img/focos.jpg'


const FirstView = () => {

  return (
    <>
      <div className="col-md-12 pr-0 pl-0" id="top">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={panorama} className="d-block w-100 imgBg" alt="edificios" />
            </div>
            <div class="carousel-item">
              <img src={escritorio} className="d-block w-100 imgBg" alt="escritorio" />
            </div>
            <div className="carousel-item">
              <img src={focos} className="d-block w-100 imgBg" alt="focos" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          </a>
        </div>
      </div>
      {/* <div className="col-md-4 flex-column pt-4">
            <div>
              <h2 className="title pt-3 text-center">Hablamos tu mismo idioma</h2>
              <p className="title text-center">Escuchamos tus inconvenientes y desarrollamos una solución adecuada a tu proyecto.</p>
            </div>
            <div>
              <h2 className="title text-center">Creamos tu aplicación</h2>
              <p className="title text-center">Para todas tus pantallas. El mundo digital de hoy requiere disponibilidad en todos los soportes.</p>
            </div>
          </div> */}
      {/* </div>
      </div> */}
    </>
  );
}

export default FirstView;