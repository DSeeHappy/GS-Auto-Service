import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const CallToAction = () => {
  return (
    <a href="https://www.google.com/maps/place/GS+Auto+Service+Co/@39.709786,-105.0581848,17z/data=!3m1!4b1!4m5!3m4!1s0x876b80c078d84645:0xae559ac3652a7829!8m2!3d39.7097819!4d-105.0559961">
      <section className="call-to-action">
        <Container>
          <Row className="align-items-center">
            <Col xl={9} lg={8}>
              <div className="call-to-action__content">
                <div className="call-to-action__icon">
                  <i class="fas fa-map-marker-alt"></i>{" "}
                </div>
                <h3>Need Repairs Now?</h3>
                <h3></h3>
              </div>
            </Col>
            <Col
              xl={3}
              lg={3}
              className="d-flex justify-content-start justify-content-md-center justify-content-xl-end justify-content-lg-end"
            >
              <a
                href="https://www.google.com/maps/place/GS+Auto+Service+Co/@39.709786,-105.0581848,17z/data=!3m1!4b1!4m5!3m4!1s0x876b80c078d84645:0xae559ac3652a7829!8m2!3d39.7097819!4d-105.0559961"
                className="thm-btn "
              >
                Find Us
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </a>
  );
};

export default CallToAction;
