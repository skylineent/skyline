import React, { useState } from "react";
import "./Singlebanner.scss";
import Singlebannerbg from "../../Assets/singlebannerbg.png";
import Form from "../Form/Form";

function Singlebanner() {
  const [activeCard, setactiveCard] = useState("");

  return (
    <>
      <div className="singlebanner-main-container">
        <div className="singlebanner-container">
          <div className="singlebanner-content-container">
            <div className="singlebanner-tag">Are You In A Business</div>
            <div className="singlebanner-subtag">
              And looking for a fast business capital or loan ?
            </div>
          </div>
          <div className="singlebanner-btn" onClick={() => setactiveCard(1)}>
            Apply Now
          </div>
          <div className="singlebanner-image-container">
            <img src={Singlebannerbg} alt="" />
          </div>
        </div>
      </div>
      {activeCard == 1 && <Form handleClick={() => setactiveCard()} />}
    </>
  );
}

export default Singlebanner;
