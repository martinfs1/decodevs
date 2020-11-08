import React from 'react';
import Andres from '../img/Andres.jpg';
import marco from '../img/marco.jpg';
import martin from '../img/martin.jpg'

export const Nosotros = () => {
  return (
    <div className="container-fluid my-4" id="nosotros">
      <h2 className="text-center display-4 subtitle">Nosotros</h2>
      <div className="row mx-auto justify-content-around">
        <div className="foto">
          <img src={Andres} width="200" height="200" className="" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Andres Perlo</h5>
            <p className="card-text">Desarrollador Web Backend</p>
          </div>
        </div>
        <div className="foto">
          <img src={marco} className="" width="200" height="200" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Marco Baiad</h5>
            <p className="card-text">Desarrollador Web Fullstack</p>
          </div>
        </div>
        <div className="foto">
          <img src={martin} className="" width="200" height="200" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Martin Sandander</h5>
            <p className="card-text">Desarrollador Web Frontend</p>
          </div>
        </div>
      </div>
    </div>
  )
}