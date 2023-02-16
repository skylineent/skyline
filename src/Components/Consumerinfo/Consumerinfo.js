import React from "react";
import "./Consumerinfo.scss";
import Consumerbg from "../../Assets/consumerbg.png";

function Consumerinfo() {
  function openConsec(x) {
    var consec1 = document.getElementById("consec1");
    var consec2 = document.getElementById("consec2");
    var consec3 = document.getElementById("consec3");
    var consec4 = document.getElementById("consec4");
    if (x == 1) {
      consec1.style.transition = "all 0.5s ease-in-out";
      if (consec1.style.height == "0px") {
        consec1.style.height = "100px";
        consec1.style.padding = "2.5%";
        consec2.style.height = "0px";
        consec3.style.height = "0px";
        consec4.style.height = "0px";
        consec2.style.padding = "0px";
        consec3.style.padding = "0px";
        consec4.style.padding = "0px";
      } else {
        consec1.style.height = "0px";
        consec1.style.padding = "0%";
      }
    } else if (x == 2) {
      consec2.style.transition = "all 0.5s ease-in-out";
      if (consec2.style.height == "0px") {
        consec2.style.height = "100px";
        consec2.style.padding = "2.5%";
        consec1.style.height = "0px";
        consec3.style.height = "0px";
        consec4.style.height = "0px";
        consec1.style.padding = "0px";
        consec3.style.padding = "0px";
        consec4.style.padding = "0px";
      } else {
        consec2.style.height = "0px";
        consec2.style.padding = "0%";
      }
    } else if (x == 3) {
      consec3.style.transition = "all 0.5s ease-in-out";
      if (consec3.style.height == "0px") {
        consec3.style.height = "100px";
        consec3.style.padding = "2.5%";
        consec1.style.height = "0px";
        consec2.style.height = "0px";
        consec4.style.height = "0px";
        consec1.style.padding = "0px";
        consec2.style.padding = "0px";
        consec4.style.padding = "0px";
      } else {
        consec3.style.height = "0px";
        consec3.style.padding = "0%";
      }
    } else if (x == 4) {
      consec3.style.transition = "all 0.5s ease-in-out";
      if (consec4.style.height == "0px") {
        consec1.style.height = "0px";
        consec2.style.height = "0px";
        consec3.style.height = "0px";
        consec4.style.height = "100px";
        consec4.style.padding = "2.5%";
        consec1.style.padding = "0px";
        consec2.style.padding = "0px";
        consec3.style.padding = "0px";
      } else {
        consec4.style.height = "0px";
        consec4.style.padding = "0%";
      }
    }
  }
  return (
    <>
      <div className="Consumerinfo-main-container">
        <div className="Consumerinfo-sub-container">
          <div className="Consumerinfo-image-container">
            <img src={Consumerbg} alt="Consumerbg" />
          </div>
        </div>
        <div className="Consumerinfo-sub-container">
          <div className="Consumerinfo-content-container">
            <div
              className="Consumerinfo-content-row1"
              onClick={() => openConsec(1)}
            >
              Credit Acceptance offers indirect auto financing
            </div>
            <div className="Consumerinfo-content-row2" id="consec1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            <div
              className="Consumerinfo-content-row1"
              onClick={() => openConsec(2)}
            >
              Most contract terms are set by the dealership.
            </div>
            <div className="Consumerinfo-content-row2" id="consec2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            <div
              className="Consumerinfo-content-row1"
              onClick={() => openConsec(3)}
            >
              Participating Credit Acceptance dealerships
            </div>
            <div className="Consumerinfo-content-row2" id="consec3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            <div
              className="Consumerinfo-content-row1"
              onClick={() => openConsec(4)}
            >
              Nearly any vehicle works on the Credit Acceptance
            </div>
            <div className="Consumerinfo-content-row2" id="consec4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Consumerinfo;
