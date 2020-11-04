import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import menu1 from '../img/menu1.png'

function NavBar() {

  const [altura, setAltura] = useState()
  const [altCarousel, setAltCarousel] = useState()

  const navBartrans = React.useRef();

  const func = () => {
    const carousel = document.getElementById('carouselExampleIndicators')
    setAltura(navBartrans.current.offsetTop)
    setAltCarousel(carousel.clientHeight)


    if (altCarousel > altura) {
      navBartrans.current.classList.remove("navTransparent")
      // console.log("paso altura");
    }
    if (window.pageYOffset > altCarousel) {
      navBartrans.current.classList.add("navTransparent")
    }
  }

  React.useEffect(() => {
    func()
  }, [])

  window.onscroll = func

  return (
    <nav className="navbar-dark navbar navbar-expand-sm barra-navegacion fixed-top" ref={navBartrans}>
      <Link className="navbar-brand text-white" to="/">&#60;Decodevs_/&#62;</Link>
      <img src={menu1} className="navbar-toggler btn-menu" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" />

      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link text-white" id="nos" to="#">Nosotros<span className="sr-only">(current)</span></Link>
          <Link className="nav-link text-white" to="#">Proyectos</Link>
          <Link className="nav-link text-white" to="#">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}
export default NavBar

