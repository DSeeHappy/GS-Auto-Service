import React from "react";
import Link from "next/link";
import NavLinks from "./header/nav-links";

import logoLight from "../public/assets/img/GSLogoLight.png";

const MobileNav = () => {
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay side-menu__block-overlay"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close side-menu__close-btn">
          <i className="far fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src={logoLight} width="101" alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <NavLinks />
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="azino-icon-email"></i>
            <a href="mailto:gilsa33@yahoo.com">gilsa33@yahoo.com</a>
          </li>
          <li>
            <i className="azino-icon-telephone"></i>
            <a href="tel:303-525-4209">(303) 525-4209</a>
          </li>
          <li>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <a href="https://www.google.com/maps/place/GS+Auto+Service/@39.7097504,-105.0581813,17z/data=!3m1!4b1!4m5!3m4!1s0x876b80c078d84645:0xae559ac3652a7829!8m2!3d39.7097463!4d-105.0559926">
              5420 W Alameda Ave,<br/> Lakewood, CO 80226
            </a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
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
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
