import React, { useEffect } from "react";
import "./slider.css";
import Slider from "react-slick";
import img1 from "../../imges/asset 7.svg";
import img2 from "../../imges/asset 8.svg";
import img3 from "../../imges/asset 9.svg";
import img4 from "../../imges/asset 10.svg";
import img5 from "../../imges/asset 11.svg";
import img6 from "../../imges/asset 12.svg";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
function SliderHome() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`slidercop`}>
      <div className="container">
        <div className="contact wow fadeInUp " data-wow-delay="0.2s" data-wow-duration="1s">
          <h6>Brands Collaboraations</h6>
          <h4>Brands that trust us</h4>
        </div>
        <div className="slider-container wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
          <Slider {...settings}>
            <div className="img mx-3">
              <img src={img1} alt="..." />
            </div>
            <div className="img mx-3">
              <img src={img2} alt="..." />
            </div>
            <div className="img mx-3">
              <img src={img3} alt="..." />
            </div>
            <div className="img mx-3">
              <img src={img4} alt="..." />
            </div>
            <div className="img mx-3">
              <img src={img5} alt="..." />
            </div>
            <div className="img mx-3">
              <img src={img6} alt="..." />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderHome;
