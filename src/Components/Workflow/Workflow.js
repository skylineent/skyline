import React from "react";
import "./Workflow.scss";
import Workflowbg from "../../Assets/workflowbg.png";

function Workflow() {
  return (
    <>
      <div className="workflow-main-container">
        <div className="workflow-sub-container">
          <div className="workflow-content-container">
            <div className="workflow-numbering">
              <span></span>
              <div className="numbering-image-container">1</div>
              <div className="numbering-image-container">2</div>
              <div className="numbering-image-container">3</div>
            </div>
            <div className="workflow-content">
              <div className="workflow-content-row">
                <div className="workflow-content-tag">Check for an offer</div>
                <div className="workflow-content-description">
                  We are checking offers on your eligibility.
                </div>
              </div>
              <div className="workflow-content-row">
                <div className="workflow-content-tag">Quick application</div>
                <div className="workflow-content-description">
                  Fill application for loan, easy and online.
                </div>
              </div>
              <div className="workflow-content-row">
                <div className="workflow-content-tag">Get funded</div>
                <div className="workflow-content-description">
                  When Application Apporove within 2 hour get amount.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="workflow-sub-container">
          <div className="image-container">
            <img src={Workflowbg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Workflow;
