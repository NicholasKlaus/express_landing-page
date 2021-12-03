import React from "react";
import DMCA from "../img/DMCA.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-3">
          <h4 className="footer__logo">Express</h4>
          <span className="footer__text">All Rights Reserved to info.com</span>
          <br />
          <span className="footer__text">© DDD – Web Marketing</span>
          <br />
          <span className="footer__text">Privacy Policy</span>
          <br />
          <img src={DMCA} alt="log" />
        </div>
        <div className="col-md-3">
          <h4 className="footer__titles">CONTACT US</h4>
          <div className="footer__wrap">
            <span className="footer__text subtitle">UK</span>
            <div>
              <span className="footer__text">+44-2020202020</span>
              <br />
              <span className="footer__text">+44-2020202020</span>
            </div>
          </div>
          <div className="footer__wrap">
            <span className="footer__text subtitle">AUT</span>
            <span className="footer__text">+44-2020202020</span>
          </div>
          <div className="footer__wrap">
            <span className="footer__text subtitle">AUS</span>
            <span className="footer__text">+44-2020202020</span>
          </div>
        </div>
        <div className="col-lg-4">
          <h4 className="footer__titles">ADRESS</h4>
          <span className="footer__text">Lorem ipsum</span>
          <br />
          <span className="footer__text">set amet</span>
          <h4 className="footer__titles">OUR OFFICE HOURS</h4>
          <span className="footer__text">Mon-Fr: 8:00-18:00 GMT</span>
          <br />
          <span className="footer__text">Sat/Su: Closed</span>
        </div>
        <div className="col-lg-2">
          <h4 className="footer__titles">EMAIL US</h4>
          <span className="footer__text">info@info.com</span>
        </div>
      </div>
    </div>
  );
};
