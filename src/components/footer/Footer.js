import React, { useEffect } from "react";
import "./footer.css";
import img1 from "../../imges/asset 50.svg";
import img2 from "../../imges/asset 51.svg";
import img3 from "../../imges/asset 52.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
function Footer() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <div className="footer wow fadeInUp"  data-wow-delay="0.2s" data-wow-duration="1s">
      <div className="container">
        <div className="form">
          <div className="row">
            <div className="col-12 col-md-6 titie">
              <div className="cont">
                <h6>Let's</h6>
                <h6 className="h6">Talk!</h6>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Phone" />
                <textarea placeholder="Your Message"></textarea>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 mb-3">
              <div>
                <div className="itme">
                  <div>
                    <img src={img1} alt=".." />
                  </div>
                  <Link>agencee@email.com</Link>
                </div>
                <div className="itme">
                  <div>
                    <img src={img2} alt=".." />
                  </div>
                  <Link>+ 54 2541 22 55 66</Link>
                </div>
                <div className="itme">
                  <div>
                    <img src={img3} alt=".." />
                  </div>
                  <Link>123 Main Street Anytown, USA, 2141</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <div className="list">
                <h6>Menu</h6>
                <ul>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Services</Link>
                  </li>
                  <li>
                    <Link>Projects</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                  <li>
                    <Link>Review</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2 p-0">
              <div className="list">
                <h6>Services</h6>
                <ul>
                  <li>
                    <Link>SEO</Link>
                  </li>
                  <li>
                    <Link>Content Marketing</Link>
                  </li>
                  <li>
                    <Link>Website Design</Link>
                  </li>
                  <li>
                    <Link>Social Media Marketing</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <div className="list">
                <h6>Other Pages</h6>
                <ul>
                  <li>
                    <Link>SEO</Link>
                  </li>
                  <li>
                    <Link>404</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          <div className="follow">
            <h6>Follow us:</h6>
            <div className="iconss">
              <div className="icon">
                <FontAwesomeIcon  icon={faFaceAngry} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faFaceAngry} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faFaceAngry} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faFaceAngry} />
              </div>
            </div>
            <div>
              <input type="text" placeholder="Name@email.com" />
              <button>Subscribe for newsletter</button>
            </div>
          </div>
          <hr/>
      </div>
    </div>
  );
}

export default Footer;
