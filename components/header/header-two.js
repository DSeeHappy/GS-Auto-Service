import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import NavLinks from "./nav-links";

import logoDark from "../../public/assets/img/GSLogo.png";

const HeaderTwo = () => {
  useEffect(() => {
    mobileMenu();
    return () => {
      mobileMenu();
    };
  });

  const mobileMenu = () => {
    document
      .querySelector(".mobile-nav__toggler")
      .addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.toggle("expanded");
        e.preventDefault();
      });
    // search toggler
    let searchCloser = document.querySelectorAll(".search-toggler");
    searchCloser.forEach((searchCloserBtn) => {
      searchCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".search-popup").classList.toggle("active");
        e.preventDefault();
      });
    });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.remove("expanded");
        e.preventDefault();
      });
    });
  };
  return (
    <div className="main-header__two">
      <div className="main-header__top">
        <Container>
          <p>Welcome to GS Auto Service</p>
          <div className="main-header__social">
            <a href="#" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </Container>
      </div>
      <div className="header-upper">
        <Container>
          <div className="logo-box mr-5">
            <Link href="/">
              <a aria-label="logo image">
                <img src={logoDark} width="101" alt="" />
              </a>
            </Link>
            <span className="fa fa-bars mobile-nav__toggler"></span>
          </div>

          <div className="header-info">
            <div className="header-info__box">
              <i className="azino-icon-email1"></i>
              <div className="header-info__box-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:gilsa33@yahoo.com">gilsa33@yahoo.com</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-calling"></i>
              <div className="header-info__box-content">
                <h3>Phone</h3>
                <p>
                  <a href="tel:303-525-4209">303 525 4209</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
                <i href="https://www.google.com/maps/place/GS+Auto+Service/@39.7097463,-105.0581813,17z/data=!3m1!4b1!4m5!3m4!1s0x876b80c078d84645:0xae559ac3652a7829!8m2!3d39.7097463!4d-105.0559926" className="azino-icon-address"></i>
              <a href="https://www.google.com/maps/place/GS+Auto+Service/@39.7097463,-105.0581813,17z/data=!3m1!4b1!4m5!3m4!1s0x876b80c078d84645:0xae559ac3652a7829!8m2!3d39.7097463!4d-105.0559926">

                <div className="main-header__info">
                  <ul className="list-unstyled main-header__info-list">
                    <li>
                      <a>Monday-Friday: 8AM - 6PM</a>
                    </li>
                    <li>
                      <a>Saturday: 8AM - 2PM</a>
                    </li>
                    <li>
                      <a>Sunday: CLOSED</a>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
      <nav className="main-menu">
        <Container>
          <NavLinks extraClassName="dynamic-radius" />
          <a
            href="https://g.page/gs-auto-service-lakewood/review?rc"
            className="thm-btn dynamic-radius"
          >
            Review us on Google
          </a>
        </Container>
      </nav>
    </div>
  );
};

export default HeaderTwo;
