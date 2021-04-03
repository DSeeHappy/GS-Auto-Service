import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../public/assets/img/backgrounds/drivingtomountains.png";
import HeartImage from "../../public/assets/img/GSLogoLight.png";

const Financing = () => {
  return (
    <section className="call-to-action-two">
      <div
        className="call-to-action-two__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Container className="container pt-80 pb-80">
        <i className="fa fa-car call-to-action-two__icon"></i>
        <Row className=" align-items-center">
          <Col lg={7}>
            <div className="block-title">
              <p>
                <img src={HeartImage} width="85" alt="" />
                Get Accessible Financing With Snap Financing
              </p>
              <h3>Financing in a Snap!</h3>
              <hr />
              <h3> High Approval Rates &amp; Amounts</h3>
            </div>
          </Col>
          <Col
            lg={5}
            className=" d-flex justify-content-start justify-content-lg-end"
          >
            <div className="btn-wrap">
              <a
                href="https://snapfinance.com/snap-merchants/gs-auto-service-and-tires-denver/490233871"
                className="scroll-to-target thm-btn"
              >
                Apply Now
              </a>
            </div>
          </Col>
          <Col>
            <div className="donate-options__icon-wrap">
              <div className="donate-options__icon">
                <i class="far fa-thumbs-up"></i>{" "}
                <h3>
                  <a href="https://snapfinance.com/snap-merchants/gs-auto-service-and-tires-denver/490233871">
                    Approval
                  </a>
                </h3>
              </div>
              <div className="donate-options__icon">
                <i class="fas fa-money-bill-wave-alt"></i>{" "}
                <h3>
                  <a href="https://snapfinance.com/snap-merchants/gs-auto-service-and-tires-denver/490233871">
                    Access
                  </a>
                </h3>
              </div>
              <div className="donate-options__icon">
                <i class="fas fa-tools"></i>{" "}
                <h3>
                  <a href="https://snapfinance.com/snap-merchants/gs-auto-service-and-tires-denver/490233871">
                    Repairs
                  </a>
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Financing;
