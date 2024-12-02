import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
import img1 from "../../imges/asset 32.svg";

function Services() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <div className="services">
      <div className="container">
        <h3 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s" >
          <span>Services</span>What we are offering
        </h3>
        <div className="link wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
          <Link>
            <span>View All Services</span>
            <span className="spanbte"></span>
            <span>
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </span>
          </Link>
        </div>

        <div className="row">
          <div className="clo-12 col-md-6">
            <div className="itme-services wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s"> 
              <Link>
                <div>
                  <img src={img1} alt=".." />
                </div>
                <h5>SEO</h5>
                <p>
                  We optimize your site's structure, content, and keywords to
                  rank higher on search engine results pages, increasing your
                  chances of being discovered by potential customers.
                </p>
                <div className="span">
                  <span className="span1">Learn More</span>
                  <span className="span2">
                    <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="clo-12 col-md-6">
            <div className="itme-services wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s" >
              <Link>
                <div>
                  <img src={img1} alt=".." />
                </div>
                <h5>SEO</h5>
                <p>
                  We optimize your site's structure, content, and keywords to
                  rank higher on search engine results pages, increasing your
                  chances of being discovered by potential customers.
                </p>
                <div className="span">
                  <span className="span1">Learn More</span>
                  <span className="span2">
                    <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="clo-12 col-md-6">
            <div className="itme-services wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
              <Link>
                <div>
                  <img src={img1} alt=".." />
                </div>
                <h5>SEO</h5>
                <p>
                  We optimize your site's structure, content, and keywords to
                  rank higher on search engine results pages, increasing your
                  chances of being discovered by potential customers.
                </p>
                <div className="span">
                  <span className="span1">Learn More</span>
                  <span className="span2">
                    <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="clo-12 col-md-6">
            <div className="itme-services wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
              <Link>
                <div>
                  <img src={img1} alt=".." />
                </div>
                <h5>SEO</h5>
                <p>
                  We optimize your site's structure, content, and keywords to
                  rank higher on search engine results pages, increasing your
                  chances of being discovered by potential customers.
                </p>
                <div className="span">
                  <span className="span1">Learn More</span>
                  <span className="span2">
                    <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
