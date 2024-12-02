import React, { useEffect } from "react";
import "./fqa.css";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
function Fqa() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <div
      className="fqa wow fadeInUp "
      data-wow-delay="0.2s"
      data-wow-duration="1s"
    >
      <div className="container">
        <div className="cont">
          <h6>Frequently Asked Questions</h6>
          <h5>Got Questions?</h5>
          <h5>We've Got Answers!</h5>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                What is SEO and why is it important?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                SEO, or Search Engine Optimization, is the process of optimizing
                a website to improve its visibility and ranking on search engine
                results pages (SERPs). It's important because it helps
                businesses attract organic traffic, increase their online
                visibility, and ultimately drive more leads and conversions.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingf">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsef"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsef"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsef"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingf"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapse5"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapse5"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapse5"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-heading5"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fqa;
