import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about1 from "../../public/assets/img/shapes/carrepairicon.png";
import about2 from "../../public/assets/img/resources/downtownskyline.png";
import about3 from "../../public/assets/img/resources/denverskyline.png";
import heart from "../../public/assets/img/GSLogo.png";

const AboutOne = () => {
  return (
    <section className="about-one pt-120 pb-40">
      <Container>
        <Row>
          <div className="about-one__award">
            <img src={about1} alt="" className="img-fluid" />
          </div>
          <Col lg={6}>
            <img src={about2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={about3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={4}>
              <div className="block-title">
                <p>
                  <img src={heart} width="85" alt="" />
                  Gilberto Sanchez
                </p>
                <h3>
                  With over 20 years of experience. <br /> You know you are in
                  good hands
                </h3>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text text-dark">
                2018 was the year Gilberto felt it was time to open GS Auto
                Service. Having worked at many locations around Denver. <hr />
                GS Auto will be the repair shop you go to when you need results.
              </p>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text text-dark">
                With a breadth of experience, our technicians will make you feel
                at ease. <hr />
                From Pre-Purchase Inspections, Pre-Road Trip Inspections,
                Emissions Testing to Check Engine Lights. We can make sure your
                vehicle is always healthy.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;
