import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../public/assets/img/GSLogoLight.png";

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link href="/">
                  <a aria-label="logo image">
                    <img
                      src={logoLight}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>
                </Link>
                <p>
                  At GS Auto Service we perform your auto repairs and
                  maintenance services right the first time because we know what
                  we’re doing with every service we provide.
                </p>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="tel:303-525-4209">
                      <i className="azino-icon-telephone"></i>303 525 4209
                    </a>
                  </li>
                  <li>
                    <a href="mailto:gilsa33@yahoo.com">
                      <i className="azino-icon-email"></i>gilsa33@yahoo.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/GS+Auto+Service+Co/@39.709786,-105.0581848,17z/data=!3m1!4b1!4m5!3m4!1s0x876b80c078d84645:0xae559ac3652a7829!8m2!3d39.7097819!4d-105.0559961">
                      <i className="azino-icon-pin"></i>5420 W Alameda Ave
                      Denver, CO 80226
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/fleet">
                      <a>Fleet Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter">
                <h3 className="footer-widget__title">Newletter</h3>
                <p>
                  Signup now to get the latest news &amp; promotions from us
                </p>
                <form
                  data-netlify="true"
                  name="Newsletter v0.01"
                  method="POST"
                  data-netlify-honeypot="bot-field"
                  onSubmit="submit"
                  className="footer-widget__newsletter-form mc-form"
                >
                  <div hidden>
                    <input name="bot-field" />
                  </div>
                  <input
                    type="hidden"
                    name="form-name"
                    value="Newsletter v0.01"
                  />
                  <label htmlFor="mc-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mc-email"
                    className=""
                    placeholder="Email address"
                  />
                  <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                    <button type="submit" className="thm-btn ">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>
            © Copyright 2021 <a href="https://dseehappy.com">DSeeHappy</a>
          </p>
          <div className="footer-social">
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
    </section>
  );
};

export default Footer;
