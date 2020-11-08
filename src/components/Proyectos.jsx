import React from 'react'
import dvc from '../img/dvc.png'
import asturias from '../img/asturias.png'
import tabaco from '../img/tabaco.jpg'

export const Proyectos = () => {
  return (
    <div className="container-fluid my-4" id="proyectos">
      <h2 className="text-center display-4 subtitle mb-3">Proyectos</h2>
      <div className="card-deck mx-auto ">
        <div className="card">
          <img src={asturias} className="card-img-top imgProyect" width="" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Asturias Foods & Drinks </h5>
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card">
          <img src={dvc} className="card-img-top imgProyect" height="" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Del Valle Créditos</h5>
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card">
          <img src={tabaco} className="card-img-top imgProyect " alt="..." />
          <div className="card-body">
            <h5 className="card-title">Norte Tabacos</h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  )
}
