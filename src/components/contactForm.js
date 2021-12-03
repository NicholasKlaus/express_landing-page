import React from "react";

export const ContactForm = () => {
  return (
    <div className="form">
      <div className="row">
        <form className="form-control">
          <h3 className="form__title">
            Contact <span className="color">US</span>
          </h3>
          <div className="row d-flex justify-content-between">
            <div className="col-md-6 d-flex justify-content-center">
              <input
                className="form__inp"
                placeholder="First name"
                type="text"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <input
                className="form__inp"
                placeholder="Last name"
                type="text"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-md-6 d-flex justify-content-center">
              <input
                className="form__inp"
                placeholder="+1"
                type="tel"
                pattern="^[ 0-9]+$"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <input
                className="form__inp"
                placeholder="Enter email"
                type="email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
              <textarea
                className="form__textarea"
                placeholder="Tell Us What Happend"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
              <div className="form-btn__wrap">
                <button className="form__btn">Send</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
