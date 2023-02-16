import React from "react";
import "./App.css";
import Header from '../src/Components/header/header.js';
import Parallax from "./Components/Parallax/Parallax";
import Mainbanner from "./Components/Mainbanner/Mainbanner.js";
import Sections from "./Components/Sections/Sections.js";
import Workflow from "./Components/Workflow/Workflow.js";
import Singlebanner from "./Components/Singlebanner/Singlebanner";
import Consumerinfo from "./Components/Consumerinfo/Consumerinfo";
import Footer from "./Components/Footer/Footer.js";
import Copyright from "./Components/Copyright/Copyright";


function App() {
  return (
    <>
      <div className="main-bg-container">
        <div className="main-container">
          < Header />
          <Mainbanner />
          <div className="height"></div>
          <div className="component-tag-container">
            <div className="component-tag" id="Our Services">Our Services</div>
          </div>
          <Sections />
          <div className="height"></div>
          <div className="component-tag-container">
            <div className="banner-description" id="How It Works">How It Works</div>
            <div className="component-tag">Start Your Credit Approval</div>
          </div>
          <Workflow />
          <div className="height"></div>
          <div className="height1"></div>
          <Singlebanner />
          <div className="height"></div>
          <div className="height1"></div>
          <Parallax />
          <div className="height"></div>
          <div className="component-tag-container">
            <div className="component-tag" id="Consumer Information">Consumer Information</div>
          </div>
          <Consumerinfo />
          <div className="height"></div>
          <Footer />
          <Copyright />
        </div>
      </div>
    </>
  );
}

export default App;
