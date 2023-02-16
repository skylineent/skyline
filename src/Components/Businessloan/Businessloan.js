import React from "react";
import servicesbg from "../../Assets/moc/business.png";

export default function Businessloan({ handleClick }) {
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
              <div className="personalloan-tag">Business Loan</div>
              <div className="personalloan-description">
                Home loan services can be an invaluable resource for people
                looking to purchase a home. With so many different types of home
                loans available, it can be difficult to know which one is the
                best fit for your needs. Mortgage services are available to help
                you compare different home loan rates and options, so you can
                make the best choice for your situation. Refinancing is also an
                option, which can help you lower your monthly payments or get a
                better interest rate.
              </div>
              <div className="keyword-container">
                <div className="keyword-tag">Key Words</div>
                <div className="keyword-sub-container">
                  <div className="keyword">- Mortgage broker</div>
                  <div className="keyword">- Home loan</div>
                  <div className="keyword">- Refinancing</div>
                  <div className="keyword">- Lender</div>
                  <div className="keyword">- Closing cost</div>
                  <div className="keyword">- Pre-approval</div>
                </div>
                <div className="keyword-sub-container">
                  <div className="keyword">- Credit score</div>
                  <div className="keyword">- Down payment</div>
                  <div className="keyword">- Flexible Terms</div>
                  <div className="keyword">- Equity</div>
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
