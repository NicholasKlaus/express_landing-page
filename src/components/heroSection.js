import React from "react";

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-12 justify-content-center align-items-center">
          <h1 className="hero__title">Lorem ipsum set ammet test-test</h1>
          <h3 className="hero__subtitle">LET US HELP YOU GET IT ALL BACK!</h3>
          <div className="hero__wrap">
            <p className="hero__text">
              We currently take cases that are $10,000 US and up
            </p>
            <div className="hero-btn__wrap">
              <button className="hero__btn">Get a free consultation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
