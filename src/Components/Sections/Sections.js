import React, { useState } from "react";
import "./Sections.scss";
import Home from "../../Assets/sectionsico/home.png";
import Business from "../../Assets/sectionsico/business.png";
import Mortage from "../../Assets/sectionsico/mortage.png";
import Personal from "../../Assets/sectionsico/personal.png";
import Car from "../../Assets/sectionsico/car.png";
import Construction from "../../Assets/sectionsico/construction.png";
import Land from "../../Assets/sectionsico/land.png";
import Quotes from "../../Assets/sectionsico/quotes.png";
import Apply from "../../Assets/sectionsico/apply.png";
import Personalloan from "../../Components/Personalloan/Personalloan.js";
import Homeloan from "../Homeloan/Homeloan";
import Mortageloan from "../Mortageloan/Mortageloan";
import Businessloan from "../Businessloan/Businessloan";
import Constructionloan from "../Constructionloan/Constructionloan";
import Carloan from "../Carloan/Carloan";
import Landloan from "../Landloan/Landloan";
import Form from "../Form/Form";

function Sections() {
  const [activeCard, setactiveCard] = useState("");
  const LOAN_TYPE = [
    {
      id: 1,
      name: "Personal Loan",
      desc: "We Gave You Personal Loan To You Increase Your Self.",
      icon: Personal,
      modal: <Personalloan handleClick={() => setactiveCard()} />,
    },
    {
      id: 2,
      name: "Home Loan",
      desc: "We Gave You Personal Loan To You Increase Your Self.",
      icon: Home,
      modal: <Homeloan handleClick={() => setactiveCard()} />,
    },
    {
      id: 3,
      name: "Mortage Loan",
      desc: "We Gave You Personal Loan To You Increase Your Self.",
      icon: Home,
      modal: <Mortageloan handleClick={() => setactiveCard()} />,
    },
    {
      id: 4,
      name: "Business Loan",
      desc: "We Gave You Personal Loan To You Increase Your Self.",
      icon: Home,
      modal: <Businessloan handleClick={() => setactiveCard()} />,
    },
    {
      id: 5,
      name: "Construction Loan",
      desc: "We Gave You Personal Loan To You Increase Your Self.",
      icon: Home,
      modal: <Constructionloan handleClick={() => setactiveCard()} />,
    },
    {
      id: 6,
      name: "Car Loan",
      desc: "We Gave You Personal Loan To You Increase Your Self.",
      icon: Home,
      modal: <Carloan handleClick={() => setactiveCard()} />,
    },
    {
      id: 7,
      name: "Land Loan",
      desc: "We Gave You Personal Loan To You Increase Your Self.",
      icon: Home,
      modal: <Landloan handleClick={() => setactiveCard()} />,
    },
  ];

  return (
    <>
      <div className="section-main-container">
        <div className="section-image-container">
          <div className="image"></div>
        </div>
        <div className="section-content-container">
          <div className="section-card-row">
            {LOAN_TYPE.map((card) => {
              return (
                <React.Fragment key={card.id}>
                  <div
                    className="section-card"
                    onClick={() => setactiveCard(card.id)}
                  >
                    <div className="section-card-icon">
                      <img src={card.icon} alt="" />
                    </div>
                    <div className="section-card-tag">{card.name}</div>
                    <div className="section-card-description">{card.desc}</div>
                  </div>
                  {activeCard == card.id && <>{card.modal}</>}
                </React.Fragment>
              );
            })}

            <div
              className="section-card section-stable-card"
              onClick={() => setactiveCard(8)}
            >
              <div className="section-card-icon">
                <img src={Quotes} alt="" />
              </div>
              <div className="section-card-tag">Get Quote....</div>
              <div className="section-quote-card-description">
                Submit Required Detail, We Will Contact You Within 24 Working
                Hour.
              </div>
            </div>
            <div className="section-card section-stable-card">
              <div className="section-card-icon">
                <img src={Apply} alt="" />
              </div>
              <div className="section-card-tag">Need A Personal Loan ?</div>
              <div
                className="section-card-btn"
                onClick={() => setactiveCard(8)}
              >
                Apply Now
              </div>
            </div>
            {activeCard == 8 && <Form handleClick={() => setactiveCard()} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sections;
