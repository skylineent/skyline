import React, { useState } from "react";
import "./Mainbanner.scss";
import pointImage from "../../Assets/ameioc07.png";
import Form from "../Form/Form";

function Mainbanner() {
  const [activeCard, setactiveCard] = useState("");
  return (
    <>
      <div className="banner-parent-container">
        <div className="banner-child-container1">
          <div className="banner-containt-row">
            <div className="banner-tag">
              <span> We Help</span> Grow <span> Your </span> Business
            </div>
          </div>
          <div className="banner-containt-row">
            <div className="banner-description">
              We Help You Financialy For Growth Your Business.
            </div>
          </div>
          <div className="banner-containt-row">
            <div className="banner-btn" onClick={() => setactiveCard(1)}>
              Apply Now
            </div>
          </div>
        </div>
        {activeCard == 1 && <Form handleClick={() => setactiveCard()} />}

        <div className="banner-child-container2">
          <div className="container">
            <div className="slider">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
              <div className="slide slide4"></div>
              <div className="slide slide5"></div>
            </div>
          </div>
        </div>
        <div className="banner-point-container">
          <div className="point-sub-container">
            <div className="point-icon">
              <img src={pointImage} alt="" />
            </div>
            <div className="point-content-container">
              <div className="point-tag">Loan Up To</div>
              <div className="point-description">80% and 70 Lakh</div>
            </div>
          </div>
          <div className="point-sub-container">
            <div className="point-icon">
              <img src={pointImage} alt="" />
            </div>
            <div className="point-content-container">
              <div className="point-tag">Low Rate</div>
              <div className="point-description">Starting 9% 12-60 Months</div>
            </div>
          </div>
          <div className="point-sub-container">
            <div className="point-icon">
              <img src={pointImage} alt="" />
            </div>
            <div className="point-content-container">
              <div className="point-tag">Quick Approval</div>
              <div className="point-description">Up To 9.15%</div>
            </div>
          </div>
          <div className="point-sub-container">
            <div className="point-icon">
              <img src={pointImage} alt="" />
            </div>
            <div className="point-content-container">
              <div className="point-tag">Online Funding</div>
              <div className="point-description">Easy Procces</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainbanner;
