import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../public/assets/images/shapes/heart-2-1.png";
import welcomeImage from "../../public/assets/images/resources/welcome-1-1.png";
import aboutImage from "../../public/assets/images/shapes/about-bag-1-2.png";

const AboutTwo = () => {
  return (
    <section className="about-two pt-120 pb-120">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-two__image">
              <img src={welcomeImage} alt="" />
              <div className="about-two__award">
                <img src={aboutImage} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-two__content">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" /> Your Car Will Love Us
                </p>
                <h3>Every vehicle comes out better than it came in</h3>
              </div>
              <p className="mb-40 pr-10">
                Save time and money with us as we cut out the need for return
                visits.
              </p>
              <hr />
              <p className="mb-40 pr-10">
                We work on all makes and models of vehicles, so you can rest
                assured that our knowledgeable techs are prepared to handle your
                vehicle.
              </p>
              <Row>
                <Col md={6}>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Reliable
                      Service
                    </h3>
                  </div>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Great
                      Communication
                    </h3>
                  </div>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> High Quality
                      Parts
                    </h3>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-two__box-two">
                    <i className="azino-icon-support"></i>
                    <h5>We’ve built our reputation on hard work, integrity, and auto repair expertise. And we look forward to gaining your trust and friendship.</h5>
                  </div>
                </Col>
              </Row>
              <Link href="/about">
                <a className="thm-btn dynamic-radius">Discover More</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
