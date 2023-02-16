import React from "react";
import "./Parallax.scss";
// import Flip from 'react-reveal/Flip';
import CountUp, { startAnimation } from "react-countup";

function Parallax() {
  return (
    <>
      <div className="parallax-main-container" id="para">
        <div className="parallax">
          <div className="para-content-container">
            <div className="para-sub-container1">
              <div className="para-tag">
                Helping Find Solution For Customer Since 1990
              </div>
              <div className="para-sub-tag">
                Placerat nullam cum a magnis ultrices mattis condimentum cubilia
                lacinia lacus vel aenean.
              </div>
            </div>
            <div className="para-sub-container2">
              <div className="para-counter-box">
                <div>
                  <div className="counter-box">2050 +</div>
                </div>
                <div className="para-counter-tag">Happy Clients</div>
              </div>
              <div className="para-counter-box">
                <div>
                  <div className="counter-box">70 +</div>
                </div>
                <div className="para-counter-tag">Investica Network</div>
              </div>
              <div className="para-counter-box">
                <div>
                  <div className="counter-box">1650 +</div>
                </div>
                <div className="para-counter-tag">Loan Approval</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Parallax;
