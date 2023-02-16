import React, { useState } from "react";
import "./Form.scss";

export default function Form({ handleClick }) {
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
    setTestimonial({ name: "", desc: "", gender: "Male" });
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
            <div className="input-row">
              <input
                type="text"
                id="name"
                value={testimonial.name}
                onChange={(e) =>
                  setTestimonial({ ...testimonial, name: e.target.value })
                }
              />
              <label className={`${testimonial.name ? "active" : ""}`}>
                Name
              </label>
            </div>
            <div className="input-row">
              <input
                type="text"
                id="name"
                value={testimonial.desc}
                onChange={(e) =>
                  setTestimonial({ ...testimonial, desc: e.target.value })
                }
              />
              <label className={`${testimonial.desc ? "active" : ""}`}>
                Number
              </label>
            </div>
            <div className="input-row">
              <input
                type="text"
                id="name"
                value={testimonial.desc}
                onChange={(e) =>
                  setTestimonial({ ...testimonial, desc: e.target.value })
                }
              />
              <label className={`${testimonial.desc ? "active" : ""}`}>
                Remark
              </label>
            </div>
            <div className="gender-tag">Looking For</div>
            <div className="gender-sub-container">
              <div className="gender-wraper">
                <input
                  type="radio"
                  id="personal loan"
                  name="fav_language"
                  value="personal loan"
                />
                <label for="personal loan">Personal Loan</label>
              </div>
              <div className="gender-wraper">
                <input
                  type="radio"
                  id="car loan"
                  name="fav_language"
                  value="car loan"
                />
                <label for="car loan">Car Loan</label>
              </div>
              <div className="gender-wraper">
                <input
                  type="radio"
                  id="mortagage loan"
                  name="fav_language"
                  value="mortagage loan"
                />
                <label for="mortagage loan">Mortagage Loan</label>
              </div>
              <div className="gender-wraper">
                <input
                  type="radio"
                  id="home loan"
                  name="fav_language"
                  value="home loan"
                />
                <label for="home loan">Home Loan</label>
              </div>
              <div className="gender-wraper">
                <input
                  type="radio"
                  id="land loan"
                  name="fav_language"
                  value="land loan"
                />
                <label for="land loan">Land Loan</label>
              </div>
              <div className="gender-wraper">
                <input
                  type="radio"
                  id="construction loan"
                  name="fav_language"
                  value="construction loan"
                />
                <label for="construction loan">Construction Loan</label>
              </div>
              <div className="gender-wraper">
                <input
                  type="radio"
                  id="business loan"
                  name="fav_language"
                  value="business loan"
                />
                <label for="business loan">Business Loan</label>
              </div>
            </div>
            <div className="gender-tag">Any Existing Loan ?</div>
            <div className="existing-wraper">
              <div className="existing-sub-wraper">
                <input type="radio" id="yes" name="language" value="yes" />
                <label for="yes">Yes</label>
              </div>{" "}
              <div className="existing-sub-wraper">
                <input type="radio" id="no" name="language" value="no" />
                <label for="no">No</label>
              </div>
            </div>

            <br></br>
            <div className="submit" id="submit" onClick={submitForm}>
              Submit &nbsp; <IoMdSend />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Form;
