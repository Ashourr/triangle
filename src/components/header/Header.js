import React, { useEffect } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import imgtitle from "../../imges/asset 5.png";
import imgheader from "../../imges/asset 6.png";
import { Link } from "react-router-dom";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
function Header() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="header wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
          <h2>
            <span className="span-1">The</span>
            <span className="span-2">Best</span>
            <span className="span-3">Digital</span>
            <span className="span-4">Maketing</span>
            <span className="span-5">
              <img width={"50px"} src={imgtitle} alt="..." />
            </span>
            <span className="span-6">Agency.</span>
          </h2>
          <p>
            We believe in combining innovative design, sustainable practices,
            and exceptional craftsmanship to bring your vision to life.
          </p>
          <Link>
            <span>Get Template</span>
            <span className="spanbte"></span>
            <span>
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
      <div className="header-secten wow">
        <div
          className="wow fadeInUp"
          data-wow-delay="0.1s"
          data-wow-offset="50"
          data-wow-duration="1s"
        >
          <h3>
            Best Marketing Agency Best Marketing Agency Best Marketing Agency
            Best Marketing Agency Best Marketing Agency Best Marketing Agency
            Best Marketing Agency Best Marketing Agency Best Marketing Agency
            Best Marketing Agency Best Marketing Agency Best Marketing Agency
            Best Marketing Agency Best Marketing Agency Best Marketing Agency
            Best Marketing Agency Best Marketing Agency Best Marketing Agency
            Best Marketing Agency Best Marketing Agency Best Marketing Agency
            Best Marketing Agency Best Marketing Agency Best Marketing Agency
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          className="wow"
          data-wow-duration="2s"
          data-wow-offset="50"
          data-wow-delay="0.2s"
        >
          <img src={imgheader} alt="..." />
        </div>
      </div>
    </>
  );
}

export default Header;
