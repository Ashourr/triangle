import React, { useEffect } from "react";
import "./projacthome.css";
import img1 from "../../imges/asset 14.jpeg";
import img2 from "../../imges/asset 15.jpeg";
import img3 from "../../imges/asset 16.jpeg";
import img4 from "../../imges/asset 17.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
function Projccthome() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <div className="Projccthome">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <h6>Works</h6>
        </div>
        <h4 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
          Case Studies
        </h4>
        <div className="row">
          <div className="col-12 col-md-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
            <div className="itme">
              <div className="img">
                <img width={"100%"} src={img1} alt="" />
              </div>
              <div className="content">
                <h6>Case Study</h6>
                <h5>Content Writing For Video Grapher</h5>
                <p className="p1">
                  How Stellar Scripts Elevated a Videographer's Portfolio
                  Website
                </p>
                <div className="divs">
                  <div className="div1">
                    <h5>40%</h5>
                    <p>Increase in website traffic</p>
                  </div>
                  <div className="div2">
                    <h5>70%</h5>
                    <p>Target keywords ranked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
            <div className="itme ntn">
              <div className="img">
                <img width={"100%"} src={img2} alt="" />
              </div>
              <div className="content">
                <h6>Case Study</h6>
                <h5>Content Writing For Video Grapher</h5>
                <p className="p1">
                  How Stellar Scripts Elevated a Videographer's Portfolio
                  Website
                </p>
                <div className="divs">
                  <div className="div1">
                    <h5>40%</h5>
                    <p>Increase in website traffic</p>
                  </div>
                  <div className="div2">
                    <h5>70%</h5>
                    <p>Target keywords ranked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
            <div className="itme">
              <div className="img">
                <img width={"100%"} src={img3} alt="" />
              </div>
              <div className="content">
                <h6>Case Study</h6>
                <h5>Content Writing For Video Grapher</h5>
                <p className="p1">
                  How Stellar Scripts Elevated a Videographer's Portfolio
                  Website
                </p>
                <div className="divs">
                  <div className="div1">
                    <h5>40%</h5>
                    <p>Increase in website traffic</p>
                  </div>
                  <div className="div2">
                    <h5>70%</h5>
                    <p>Target keywords ranked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
            <div className="itme ntn">
              <div className="img">
                <img width={"100%"} src={img4} alt="" />
              </div>
              <div className="content">
                <h6>Case Study</h6>
                <h5>Content Writing For Video Grapher</h5>
                <p className="p1">
                  How Stellar Scripts Elevated a Videographer's Portfolio
                  Website
                </p>
                <div className="divs">
                  <div className="div1">
                    <h5>40%</h5>
                    <p>Increase in website traffic</p>
                  </div>
                  <div className="div2">
                    <h5>70%</h5>
                    <p>Target keywords ranked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="butt wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
          <Link>
            <span>View All Projects</span>
            <span className="spanbte"></span>
            <span>
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projccthome;
