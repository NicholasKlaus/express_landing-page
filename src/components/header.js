import React from "react";

export const Header = () => {
  const showNav = () => {
    let navmenu = document.getElementById("nav-menu");
    let burger = document.getElementById("burger__btn");
    navmenu.classList.toggle("active");
    burger.classList.toggle("active");
  };

  const show = () => {
    document.getElementById("submenu").classList.toggle("show");
    let icon = document.getElementById("icon");
    if (icon.classList.contains("icofont-simple-down")) {
      icon.classList.remove("icofont-simple-down");
    }
    icon.classList.toggle("icofont-simple-up");
  };

  window.onclick = function (e) {
    if (!e.target.matches(".dropdown__btn")) {
      let submenu = document.getElementById("submenu");
      let icon = document.getElementById("icon");
      if (
        submenu.classList.contains("show") &&
        icon.classList.contains("icofont-simple-up")
      ) {
        submenu.classList.remove("show");
        icon.classList.remove("icofont-simple-up");
      }
      icon.classList.toggle("icofont-simple-down");
    }
  };

  return (
    <div className="header">
      <div className="header__navigation">
        <div className="row align-items-center">
          <div className="col-2">
            <div className="d-flex align-items-center">
              <h1 className="header__logo">Express</h1>
            </div>
          </div>
          <div className="col-6">
            <div className="navigation__menu" id="nav-menu">
              <ul className="navigation__list">
                <a className="menu__link" href="/#">
                  Home
                </a>
                <div className="line"></div>
                <a className="menu__link" href="/#">
                  About us
                </a>
                <div className="line"></div>
                <div className="menu__dropdown">
                  <button onClick={show} className="dropdown__btn">
                    Our services{" "}
                    <i
                      id="icon"
                      className="icofont-simple-down dropdown__icon"
                    ></i>
                  </button>
                  <div className="dropdown__content" id="submenu">
                    <ul className="list">
                      <a className="list__item" href="/#">
                        Lorem ipsum
                      </a>
                      <a className="list__item" href="/#">
                        Lorem ipsum
                      </a>
                      <a className="list__item" href="/#">
                        Lorem ipsum
                      </a>
                      <a className="list__item" href="/#">
                        Lorem ipsum
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="line"></div>
                <a className="menu__link" href="/#">
                  Contact us
                </a>
                <div className="line"></div>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-around align-items-center">
              <div className="btn-wrap">
                <button className="nav__btn">Call us</button>
              </div>
              <div className="burger" id="burger__btn" onClick={showNav}>
                <span></span>
              </div>
              <span className="burger__text">Menu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
