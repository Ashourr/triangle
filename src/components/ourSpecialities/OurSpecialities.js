import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import "./OurSpecialities.css";
import img2 from "../../imges/asset 46.svg";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
function OurSpecialities() {
  // المواقع الأصلية والتنسيقات المخصصة لكل عنصر
  const initialData = [
    { x: 0, y: 0, content: "Quality", className: "box1" },
    { x: 100, y: 1000, content: "Reliability", className: "box2" },
    { x: 2, y: 2, content: "Personalization", className: "box3" },
    { x: 0, y: 0, content: "Collaboration", className: "box4" },
    { x: 0, y: 0, content: "Innovation", className: "box5" },
    { x: 1, y: 1, content: "Customer Focus", className: "box6" },
    { x: 215, y: 215, content: "Long-Term Relationships", className: "box7" },
    { x: 215, y: 215, content: "Trustworthiness", className: "box8" },
    { x: 215, y: 215, content: "Positive Experinence", className: "box9" },
    { x: 215, y: 215, content: "Passion", className: "box10" },
    { x: 215, y: 215, content: "Customer Support", className: "box11" },
  ];

  // حالة لإدارة المواقع والتنسيقات الحالية لكل عنصر
  const [items, setItems] = useState(initialData);

  // دالة التعامل مع السحب
  const handleDrag = (e, data, index) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], x: data.x, y: data.y };
    setItems(newItems);
  };

  // دالة التعامل مع التوقف عن السحب
  const handleStop = (index) => {
    const newItems = [...items];
    newItems[index] = { ...initialData[index], x: 0, y: 0 }; // إعادة العنصر إلى الموقع الأصلي
    setItems(newItems);
  };
  useEffect(() => {
    let wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <div className="ourSpecialities">
      <div className="container">
        <h3
          className="wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <span>Why Us</span>Our Specialities
        </h3>
        <div
          className="p wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <p>
            Our top-notch digital marketing agency not only delivers impressive
            results but also dazzles our clients with remarkable statistics. We
            pride ourselves on our ability to amaze customers with tangible
            outcomes and eye-catching figures.
          </p>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-8 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            <div className="img1">
              {/* <img width={"100%"} src={img1} alt="..." /> */}
              <h6>
                <span>150%</span>
                Average Traffic Increase
              </h6>
              <p>
                Clients choose to stay with us over the long run due to the
                exceptional results we deliver and the strong relationships we
                build.
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-4 pe-10 ps-lg-0 mb-3 pe-sm-2 ps-sm-2 mb-sm-1 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            <div className="div2">
              <h6>
                <span>$74M</span> Revenue Generated
              </h6>
              <p>
                We help generated $74M revenue for our clients around the globe
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-7 col-lg-6 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
            data-wow-offset="100"
          >
            <div className="div3">
              {/* <div> */}
              <div className="div4">
                {items.map((item, index) => (
                  <Draggable
                    key={index}
                    position={{ x: item.x, y: item.y }}
                    onDrag={(e, data) => handleDrag(e, data, index)}
                    onStop={() => handleStop(index)}
                  >
                    <div
                      className={`${item.className} wow fadeInDown `} // تعيين className الخاص بكل عنصر
                      style={
                        {
                          // transform: ` rotate(${item.rotate}deg) !important`, // تطبيق التحولات المدمجة
                        }
                      }
                      data-wow-delay="1s" data-wow-duration="1s"
                    >
                      <img width={"22px"} src={img2} alt="..." />
                      <p>{item.content}</p>
                    </div>
                  </Draggable>
                ))}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-5 col-lg-6 p-lg-1 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
            data-wow-offset="100"
          >
            <div className="contact">
              <div className="title">
                <h6>Enhanced Brand Visibility</h6>
                <h5>80%</h5>
              </div>
              <div>
                <p>
                  Our agency developed a content marketing plan for a client,
                  resulting in a significant increase in brand visibility and
                  recognition. As a result, the client experienced a 80%
                  increase in website traffic within six months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSpecialities;
