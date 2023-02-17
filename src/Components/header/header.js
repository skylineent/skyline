import React, { useState, useRef, useEffect } from "react";
import "./header.scss";
import Logo from "../../Assets/logo.png";

function Header() {
  const [hamactive, sethamActive] = useState("");
  const modalRef = useRef(null);
  function open() {
    sethamActive(hamactive == "open" ? "" : "open");
    if (hamactive == "open") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  useEffect(() => {
    if (hamactive == "open") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, []);

  const onOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      sethamActive("");
    }
  };

  function AiOutlineHome(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
      </svg>
    );
  }

  function BiBriefcase(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M20,6h-3V4c0-1.103-0.897-2-2-2H9C7.897,2,7,2.897,7,4v2H4C2.897,6,2,6.897,2,8v11c0,1.103,0.897,2,2,2h16 c1.103,0,2-0.897,2-2V8C22,6.897,21.103,6,20,6z M15,4v2H9V4H15z M8,8h8h4v3H4V8H8z M4,19v-6h6v2h4v-2h6l0.001,6H4z" />
      </svg>
    );
  }

  function FaUniversity(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z" />
      </svg>
    );
  }

  function AiOutlineFundProjectionScreen(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        t={1569683753031}
        viewBox="0 0 1024 1024"
        pId={14137}
        height="1em"
        width="1em"
        {...props}
      >
        <defs />
        <path
          d="M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z"
          pId={14138}
        />
        <path
          d="M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v0.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-0.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 512H160V232h704v440z"
          pId={14139}
        />
      </svg>
    );
  }

  return (
    <>
      <div className="header-container">
        <div className="logo-name-container">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="firm-name-container">
            <div className="firm-name">SKYLINE</div>
            <div className="firm-sub-tag">ENTERPRISE</div>
          </div>
        </div>

        <div className="header-conntent-container">
          <div className="header-content-tag">
            {" "}
            <a href="#Our Services"> Our Services</a>
          </div>
          <div className="header-content-tag">
            {" "}
            <a href="#How It Works"> How It's Work</a>
          </div>
          <div className="header-content-tag">
            {" "}
            <a href="#Consumer Information"> Consumer Info</a>
          </div>
          <div className="header-content-tag">
            {" "}
            <a href="#contact"> Contact Us</a>
          </div>
          <div className="header-content-tag">
            {" "}
            <a href="#contact"> About Us</a>
          </div>
        </div>

        <div
          className="nav-tray"
          onClick={onOutsideClick}
          style={{
            height: hamactive == "open" ? "100vh" : "0",
            width: hamactive == "open" ? "100%" : "0",
          }}
        >
          <div
            className="nav-sub-tray"
            ref={modalRef}
            style={{
              height: hamactive == "open" ? "55%" : "0",
              width: hamactive == "open" ? "60%" : "0",
            }}
          >
            <div className="nav-content">
              <div className="nav-row">
                <div className="nav-logo ">
                  <AiOutlineHome />
                </div>
                <a onClick={() => sethamActive("")} href="#Our Services">
                  Our Services
                </a>
              </div>
              <div className="nav-row">
                <div className="nav-logo ">
                  <BiBriefcase />
                </div>
                <a onClick={() => sethamActive("")} href="#How It Works">
                  How It's Work
                </a>
              </div>
              <div className="nav-row">
                <div className="nav-logo ">
                  <FaUniversity />
                </div>
                <a
                  onClick={() => sethamActive("")}
                  href="#Consumer Information"
                >
                  Consumer Info
                </a>
              </div>
              <div className="nav-row">
                <div className="nav-logo ">
                  <AiOutlineFundProjectionScreen />
                </div>
                <a onClick={() => sethamActive("")} href="#contact">
                  Contact Us
                </a>
              </div>
              <div className="nav-row">
                <div className="nav-logo ">
                  <AiOutlineFundProjectionScreen />
                </div>
                <a onClick={() => sethamActive("")} href="#contact">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-tray-container">
          <div
            id="nav-icon1"
            className={hamactive}
            onClick={() => sethamActive(hamactive == "open" ? "" : "open")}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
