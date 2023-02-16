import React from "react";
import "./Personalloan.scss";
import servicesbg from "../../Assets/moc/personal.png";

export default function Personalloan({ handleClick }) {
  return (
    <>
      <div className="personalloan-main-container">
        <div className="personalloan-buble"></div>
        <div className="personalloan-buble1"></div>
        <div className="small-buble"></div>
        <div className="medium-buble"></div>
        <div className="personalloan-container">
          <div className="personalloan-sub-container1">
            <div className="personalloan-image-container">
              <div className="image-container">
                <img src={servicesbg} alt="" />
              </div>
            </div>
            <div className="personalloan-content-container">
              <div className="personalloan-tag">Personal Loan</div>
              <div className="personalloan-description">
                As an experienced personal loan service provider, we understand
                that taking out a loan is a big decision. That’s why we make it
                our mission to provide our clients with the best possible
                customer service. We understand your unique financial situation
                and tailor our services accordingly. We provide a comprehensive
                range of personal loan products that are tailored to fit your
                individual needs, so you can rest assured that you’re getting
                the right loan for your financial requirements.
              </div>
              <div className="keyword-container">
                <div className="keyword-tag">Key Words</div>
                <div className="keyword-sub-container">
                  <div className="keyword">- Personal Loan</div>
                  <div className="keyword">- Loan Service</div>
                  <div className="keyword">- Financial Solution</div>
                  <div className="keyword">- Credit Score</div>
                  <div className="keyword">- Low Interest Rate</div>
                  <div className="keyword">- Loan Application</div>
                </div>
                <div className="keyword-sub-container">
                  <div className="keyword">- Online Application</div>
                  <div className="keyword">- Loan Repayment</div>
                  <div className="keyword">- Flexible Terms</div>

                  <div className="keyword">- Fast Approval</div>
                  <div className="keyword">- Easy Approval</div>
                </div>
              </div>
              <div className="personalloan-close" onClick={handleClick}>
                Back
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Personalloan;
