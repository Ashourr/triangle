import React, { useEffect } from "react";
import "./comments.css";
import img1 from "../../imges/asset 58.svg";
import img2 from "../../imges/asset 59.svg";
import img3 from "../../imges/asset 2.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";function Comments() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <div className="comments wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="3s">
      <div className="container-fluid p-0 " >
        <h5>TESTIMONIAL</h5>
      </div>
      <div className="container ide">
        <div className="row row1">
          <div className="col-12 itme">
            <div className="content">
              <div>
                <img width={"100px"} src={img1} alt="..." />
              </div>
              <div>
                <img
                  style={{ opacity: "0.3" }}
                  width={"65px"}
                  src={img2}
                  alt="..."
                />
              </div>
              <p>
                Choosing Celestial Solutions was one of the best decisions we
                made for our company. Their innovative approach and dedication
                to understanding our unique needs resulted in a tailored
                marketing strategy that exceeded our expectations. Their team's
              </p>
              <span></span>
              <div className="div">
                <div>
                  <img
                    style={{ width: "60px", borderRadius: "20px" }}
                    src={img3}
                    alt="..."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Mark Chen</h5>
                  <h6>BlueSky Ventures</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 itme">
            <div className="content">
              <div>
                <img width={"100px"} src={img1} alt="..." />
              </div>
              <div>
                <img
                  style={{ opacity: "0.3" }}
                  width={"65px"}
                  src={img2}
                  alt="..."
                />
              </div>
              <p>
                Choosing Celestial Solutions was one of the best decisions we
                made for our company. Their innovative approach and dedication
                to understanding our unique needs resulted in a tailored
                marketing strategy that exceeded our expectations. Their team's
              </p>
              <span></span>
              <div className="div">
                <div>
                  <img
                    style={{ width: "60px", borderRadius: "20px" }}
                    src={img3}
                    alt="..."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Mark Chen</h5>
                  <h6>BlueSky Ventures</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 itme">
            <div className="content">
              <div>
                <img width={"100px"} src={img1} alt="..." />
              </div>
              <div>
                <img
                  style={{ opacity: "0.3" }}
                  width={"65px"}
                  src={img2}
                  alt="..."
                />
              </div>
              <p>
                Choosing Celestial Solutions was one of the best decisions we
                made for our company. Their innovative approach and dedication
                to understanding our unique needs resulted in a tailored
                marketing strategy that exceeded our expectations. Their team's
              </p>
              <span></span>
              <div className="div">
                <div>
                  <img
                    style={{ width: "60px", borderRadius: "20px" }}
                    src={img3}
                    alt="..."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Mark Chen</h5>
                  <h6>BlueSky Ventures</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 itme">
            <div className="content">
              <div>
                <img width={"100px"} src={img1} alt="..." />
              </div>
              <div>
                <img
                  style={{ opacity: "0.3" }}
                  width={"65px"}
                  src={img2}
                  alt="..."
                />
              </div>
              <p>
                Choosing Celestial Solutions was one of the best decisions we
                made for our company. Their innovative approach and dedication
                to understanding our unique needs resulted in a tailored
                marketing strategy that exceeded our expectations. Their team's
              </p>
              <span></span>
              <div className="div">
                <div>
                  <img
                    style={{ width: "60px", borderRadius: "20px" }}
                    src={img3}
                    alt="..."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Mark Chen</h5>
                  <h6>BlueSky Ventures</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 itme">
            <div className="content">
              <div>
                <img width={"100px"} src={img1} alt="..." />
              </div>
              <div>
                <img
                  style={{ opacity: "0.3" }}
                  width={"65px"}
                  src={img2}
                  alt="..."
                />
              </div>
              <p>
                Choosing Celestial Solutions was one of the best decisions we
                made for our company. Their innovative approach and dedication
                to understanding our unique needs resulted in a tailored
                marketing strategy that exceeded our expectations. Their team's
              </p>
              <span></span>
              <div className="div">
                <div>
                  <img
                    style={{ width: "60px", borderRadius: "20px" }}
                    src={img3}
                    alt="..."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Mark Chen</h5>
                  <h6>BlueSky Ventures</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 itme">
            <div className="content">
              <div>
                <img width={"100px"} src={img1} alt="..." />
              </div>
              <div>
                <img
                  style={{ opacity: "0.3" }}
                  width={"65px"}
                  src={img2}
                  alt="..."
                />
              </div>
              <p>
                Choosing Celestial Solutions was one of the best decisions we
                made for our company. Their innovative approach and dedication
                to understanding our unique needs resulted in a tailored
                marketing strategy that exceeded our expectations. Their team's
              </p>
              <span></span>
              <div className="div">
                <div>
                  <img
                    style={{ width: "60px", borderRadius: "20px" }}
                    src={img3}
                    alt="..."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Mark Chen</h5>
                  <h6>BlueSky Ventures</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 itme">
            <div className="content">
              <div>
                <img width={"100px"} src={img1} alt="..." />
              </div>
              <div>
                <img
                  style={{ opacity: "0.3" }}
                  width={"65px"}
                  src={img2}
                  alt="..."
                />
              </div>
              <p>
                Choosing Celestial Solutions was one of the best decisions we
                made for our company. Their innovative approach and dedication
                to understanding our unique needs resulted in a tailored
                marketing strategy that exceeded our expectations. Their team's
              </p>
              <span></span>
              <div className="div">
                <div>
                  <img
                    style={{ width: "60px", borderRadius: "20px" }}
                    src={img3}
                    alt="..."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Mark Chen</h5>
                  <h6>BlueSky Ventures</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 itme">
            <div className="content">
              <div>
                <img width={"100px"} src={img1} alt="..." />
              </div>
              <div>
                <img
                  style={{ opacity: "0.3" }}
                  width={"65px"}
                  src={img2}
                  alt="..."
                />
              </div>
              <p>
                Choosing Celestial Solutions was one of the best decisions we
                made for our company. Their innovative approach and dedication
                to understanding our unique needs resulted in a tailored
                marketing strategy that exceeded our expectations. Their team's
              </p>
              <span></span>
              <div className="div">
                <div>
                  <img
                    style={{ width: "60px", borderRadius: "20px" }}
                    src={img3}
                    alt="..."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Mark Chen</h5>
                  <h6>BlueSky Ventures</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-2 video">
        <div className="row">
          <div className="col-12 col-md-6 itme">
            <div className="div-itme">
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/Ly1auHs_ofo?si=ZN0DIyyZZY1i9M7v"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  // allowfullscreen
                ></iframe>{" "}
              </div>
              <div className="conten">
                <h6>Magnus Hawthorne</h6>
                <p>Owner, Bayleaf</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 itme">
            <div className="div-itme">
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/ay2e0VXtmfI?si=8CuK48nE5wej3BrG"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  // allowfullscreen
                ></iframe>
              </div>
              <div className="conten">
                <h6>Magnus Hawthorne</h6>
                <p>Owner, Bayleaf</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="butt">
          <Link>
            <span>View All Reviews</span>
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

export default Comments;
