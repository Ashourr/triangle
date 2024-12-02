import React, { useEffect, useState } from "react";
import "./Plans.css";
import { Link } from "react-router-dom";
import img from "../../imges/asset 45.svg";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
function Plans() {
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  let [monthly, setmonthly] = useState("monthly");
  // console.log(monthly);

  function handle() {
    if (monthly === "monthly") {
      setmonthly("Yearly");
    } else {
      setmonthly("monthly");
    }
  }
  return (
    <div className="plans wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="2s">
      <div className="container">
        <div className="title">
          <h6>Pricing</h6>
          <h4>Profitable Pricing Plans</h4>
          <div onClick={handle} className="links">
            <Link className={`${monthly === "monthly" ? "link1" : "a"}`}>
              Monthly
            </Link>
            <Link className={`${monthly === "Yearly" ? "link2" : "a"}`}>
              Yearly
            </Link>
          </div>
          <h6 className="save">
            Save <span>20%</span> on yearly subscription
          </h6>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 plans-itme p-2">
            <div className="itme">
              <p className="p1">Starter Plan</p>
              {monthly === "monthly" ? (
                <p className="p2">
                  $<span>83</span>
                  /month
                </p>
              ) : (
                <p className="p2">
                  $<span>2499</span>
                  /year
                </p>
              )}
              <div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
              </div>
              <Link>Get Started</Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 plans-itme p-2">
            <div className="itme">
              <p className="p1">Starter Plan</p>
              {monthly === "monthly" ? (
                <p className="p2">
                  $<span>83</span>
                  /month
                </p>
              ) : (
                <p className="p2">
                  $<span>2499</span>
                  /year
                </p>
              )}
              <div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
              </div>
              <Link className="act">Get Started</Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 plans-itme p-2">
            <div className="itme">
              <p className="p1">Starter Plan</p>
              {monthly === "monthly" ? (
                <p className="p2">
                  $<span>83</span>
                  /month
                </p>
              ) : (
                <p className="p2 tran">
                  $<span>2499</span>
                  /year
                </p>
              )}
              <div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
                <div className="div">
                  <img width={"20px"} src={img} alt="..." />
                  <p>Basic SEO Optimization</p>
                </div>
              </div>
              <Link>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
