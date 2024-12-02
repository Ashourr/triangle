import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./intoour.css";
import img1 from "../../imges/asset 23.jpeg";
import img2 from "../../imges/asset 24.jpeg"
import img3 from "../../imges/asset 25.jpeg"
import img4 from "../../imges/asset 47.svg";
import img5 from "../../imges/asset 48.svg";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
function Intoour() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <div className="into">
      <div className="container">
        <div className="cont">
          <h6 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">Blogs</h6>
          <h5  className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">Dive into our collection of engaging blog posts</h5>
        </div>
        <div className="butt wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
          <Link>
            <span>Read Blogs</span>
            <span className="spanbte"></span>
            <span>
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </span>
          </Link>
        </div>

        <div className="row wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
          <div className="col-12 col-md-6 col-lg-4 into-itme">
            <Link className="itme">
              <div className="img">
                <img width={"100%"} src={img1} alt="..." />
                <div className="div1">
                  <img src={img4} alt="..." />
                  <h6>Mar 1, 2024</h6>
                </div>
                <div className="div2">
                  <img src={img5} alt="..." />
                  <h6>Tips</h6>
                </div>
              </div>
              <div className="title">
                <h6>
                  Unveiling the Power of Organic Search: Why It Matters and How
                  to Leverage It
                </h6>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 into-itme">
            <Link className="itme">
              <div className="img">
                <img width={"100%"} src={img2} alt="..." />
                <div className="div1">
                  <img src={img4} alt="..." />
                  <h6>Mar 1, 2024</h6>
                </div>
                <div className="div2">
                  <img src={img5} alt="..." />
                  <h6>Tips</h6>
                </div>
              </div>
              <div className="title">
                <h6>
                  Unveiling the Power of Organic Search: Why It Matters and How
                  to Leverage It
                </h6>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 into-itme">
            <Link className="itme">
              <div className="img">
                <img width={"100%"} src={img3} alt="..." />
                <div className="div1">
                  <img src={img4} alt="..." />
                  <h6>Mar 1, 2024</h6>
                </div>
                <div className="div2">
                  <img src={img5} alt="..." />
                  <h6>Tips</h6>
                </div>
              </div>
              <div className="title">
                <h6>
                  Unveiling the Power of Organic Search: Why It Matters and How
                  to Leverage It
                </h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intoour;
