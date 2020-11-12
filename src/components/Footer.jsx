import React from 'react'
import flecha from '../img/flecha.png'
import { Link } from "react-scroll";
import olasFooter from "../img/olasFooter.png"

const Footer = () => {
  return (
    <div>
      <img className="olas" src={olasFooter} alt="olas" />
      <div className=" footer row mx-0 justify-content-around">
        <div className="text-center col-12 title col-md-6 pt-1 pt-md-5 order-md-1 order-2">
          <p>Copyright 2020 - Decodevs todos los derechos reservados</p>
        </div>
        <div className="position-absolute align-self-end">
          <Link
            to="top"
            spy={true}
            smooth={true}
            duration={800}
          > <img className="flecha" src={flecha} alt="flecha" /></Link>
        </div>
        <div className="col-12 col-md-4 order-1 order-md-2" id="contacto">
          <h2 className=" mt-4 title text-center">Nuestras Redes</h2>
          <div className="text-center text-md-right pr-md-5 my-3 my-md-0 ">
            <a href="http://bit.ly/decodevs" target="_blank" className="text-dark text-decoration-none">+ 54 9 381 6261384 <i className="fab redesIcon my-2 fa-whatsapp ml-3 wtsap"></i></a>
            <br />
            <a href="https://www.facebook.com/dcdsolucionesweb" target="_blank" className="text-dark text-decoration-none">Decodevs <i className="fab redesIcon my-2 fa-facebook ml-3 fb"></i></a>
            <br />
            <a href="!#" className="text-dark text-decoration-none">contacto@decodevs.com <i className="far redesIcon my-2 fa-envelope ml-3 gmail"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


