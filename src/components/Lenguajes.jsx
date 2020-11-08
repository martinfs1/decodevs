import React from 'react'
import html from '../img/html.svg'
import css from '../img/css.svg'
import js from '../img/js.svg'
import rejs from '../img/rejs.svg'
import bts4 from '../img/bts4.svg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends React.Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    return (
      <div className="lang pt-4 pb-3" >
        <div id="" className="" data-ride="">
          <div className="pb-1">
            <h2 className="title text-center display-4">Diseñamos</h2>
            <p className="title text-center">Tu proyecto con los últimos lenguajes de programación</p>
          </div>
          <Slider {...settings}>
            <div className="">
              <img src={html} className="d-block w-100 imgLang" alt="html5" />
            </div>
            <div className="">
              <img src={css} className="d-block w-100 imgLang" alt="css" />
            </div>
            <div className="">
              <img src={js} className="d-block w-100 imgLang" alt="Javascript" />
            </div>
            <div className="">
              <img src={rejs} className="d-block w-100 imgLang" alt="react-Js" />
            </div>
            <div className="">
              <img src={bts4} className="d-block w-100 imgLang" alt="bootstrap" />
            </div>
          </Slider>
          {/* <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={html} className="d-block w-100 imgLang" alt="html5" />
          </div>
          <div className="carousel-item">
            <img src={css} className="d-block w-100 imgLang" alt="css" />
          </div>
          <div className="carousel-item">
            <img src={js} className="d-block w-100 imgLang" alt="Javascript" />
          </div>
          <div className="carousel-item">
            <img src={rejs} className="d-block w-100 imgLang" alt="react-Js" />
          </div>
          <div className="carousel-item">
            <img src={bts4} className="d-block w-100 imgLang" alt="bootstrap" />
          </div>
        </div> */}
        </div>
      </div>
    )
  }
}


