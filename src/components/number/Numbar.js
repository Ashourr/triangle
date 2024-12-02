import React, { useEffect } from "react";
import "./Numbar.css";
import img1 from "../../imges/asset 37.svg";
import img2 from "../../imges/asset 38.svg";
import img3 from "../../imges/asset 39.svg";
import img4 from "../../imges/asset 40.svg";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
function Numbar() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <div className="number wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="2s">
      <div className="container">
        <div className="div-number">
          <div className="div-num">
            <div className="num-itme">
              <h3>15+</h3>
              <h6>Years of Experience</h6>
            </div>
            <div className="num-itme">
              <h3>200+</h3>
              <h6>Successful Projects</h6>
            </div>
          </div>
          <div className="div-num">
            <div className="num-itme">
              <h3>150+</h3>
              <h6>Happy Clients</h6>
            </div>
            <div className="num-itme">
              <h3>160</h3>
              <h6>5 Star Reviews</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-0">
            <div className="divitme">
              <div className="img">
                <img src={img1} alt="..." />
              </div>
              <h6>Proven Track Record</h6>
              <p>
                We have built a reputation as a trusted and reliable partner in
                achieving business success.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 p-0">
            <div className="divitme">
              <div className="img">
                <img src={img2} alt="..." />
              </div>
              <h6>Proven Track Record</h6>
              <p>
                We have built a reputation as a trusted and reliable partner in
                achieving business success.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 p-0">
            <div className="divitme">
              <div className="img">
                <img src={img3} alt="..." />
              </div>
              <h6>Proven Track Record</h6>
              <p>
                We have built a reputation as a trusted and reliable partner in
                achieving business success.
              </p>
            </div>
          </div>
        </div>
        <div className="icons">
          <div>
            <img width={"25px"} src={img4} alt="..." />
            <p>Continuous Innovation</p>
          </div>
          <div>
            <img width={"25px"} src={img4} alt="..." />
            <p>Dedicated Support</p>
          </div>
          <div>
            <img width={"25px"} src={img4} alt="..." />
            <p>Positive Client Experiences</p>
          </div>
          <div>
            <img width={"25px"} src={img4} alt="..." />
            <p>Commitment to Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbar;
