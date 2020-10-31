import React from 'react'

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm barra-navegacion fixed-top navbar-dark">
        <a className="navbar-brand title" href="#">&#60;Decodevs_/&#62;</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link text-white" href="#">Nosotros<span className="sr-only">(current)</span></a>
            <a className="nav-link text-white" href="#">Proyectos</a>
            <a className="nav-link text-white" href="#">Contacto</a>
          </div>
        </div>
      </nav>
    </>
  )
}
