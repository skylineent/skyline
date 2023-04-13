import React, { useState } from "react";
import "./Form.scss";
import axios from "axios";

export default function Form({ handleClick }) {
  // form states

  const [name, setName] = useState("");
  const [requirment, setRequirment] = useState("");
  const [number, setNumber] = useState("");
  const [loantype, setLoantype] = useState("");

  // submit event

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Requirment: requirment,
      Number: number,
      LoanType: loantype,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/9b58bb4e-ceb6-46a7-94b0-ea8fb10eac7b",
        data
      )
      .then((response) => {
        console.log(response);
        // clearing form fields
        setName("");
        setRequirment("");
        setNumber("");
        setLoantype("");
      });
  };

  const [openForm, setOpenForm] = useState(false);
  const [testimonial, setTestimonial] = useState({
    name: "",
    desc: "",
    img: "",
  });

  const [testimonialList, setTestimonialList] = useState([]);

  function AiFillCloseCircle(props) {
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
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
      </svg>
    );
  }

  function IoMdSend(props) {
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
        <path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z" />
      </svg>
    );
  }

  const submitForm = () => {
    setTestimonialList([...[...testimonialList, testimonial]]);
    setTestimonial({ name: "", Requirment: "", number: "" });
    setOpenForm(false);
  };
  return (
    <>
      <div className="form-main-container">
        <div className="form" id="form">
          <div className="form-content">
            <div className="form-close" onClick={handleClick}>
              <AiFillCloseCircle />
            </div>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="input-row">
                <input
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <label htmlFor="name" className={`${name ? "active" : ""}`}>
                  Name <span> (Ex.&nbsp; "John due")</span>
                </label>
              </div>

              <div className="input-list-row">
                <label htmlFor="loan" className={loantype ? "active" : ""}>
                  Loan Type
                </label>
                <input
                  list="loans"
                  name="loan"
                  id="loan"
                  required
                  onChange={(e) => setLoantype(e.target.value)}
                  value={loantype}
                />
                <datalist id="loans">
                  <option value="Personal" />
                  <option value="Home" />
                  <option value="Car" />
                  <option value="Land" />
                  <option value="Business" />
                </datalist>
              </div>

              <div className="input-row">
                <input
                  type="text"
                  required
                  onChange={(e) => setRequirment(e.target.value)}
                  value={requirment}
                />
                <label
                  htmlFor="Requirment"
                  className={`${requirment ? "active" : ""}`}
                >
                  Requirment <span> (Ex.&nbsp; "1 Lakh")</span>
                </label>
              </div>
              <div className="input-row">
                <input
                  type="text"
                  required
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                />
                <label htmlFor="number" className={`${number ? "active" : ""}`}>
                  Number
                </label>
              </div>
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="submit" className="submit" onClick={submitForm}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Form;
