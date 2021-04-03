import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../public/assets/img/backgrounds/GS_Auto_Service_Lakewood_CO_phonesmileright.png";
import heart from "../../public/assets/img/GSLogoLight.png";
import testimonialImage1 from "../../public/assets/img/resources/repairpallogosm.png";

const TESTIMONIALS_ONE_DATA = [
  {
    image: testimonialImage1,
    name: "Mr. L",
    designation: "Repair Pal Verified Customer",
    text:
      "The service was excellent, everything was on time. \n The place was very clean and nice, even for my kids",
  },
  {
    image: testimonialImage1,
    name: "Karla",
    designation: "Repair Pal Verified Customer",
    text:
      "It was the best place to take a car. They have great service. \n They have taken care of my mechanical needs.",
  },
  {
    image: testimonialImage1,
    name: "Ms. C",
    designation: "Repair Pal Verified Customer",
    text:
      "They did fabulous, very nice, hardworking and very motivated to do a good job. \n He's been in business for a long time.",
  },
];

const TestimonialsOne = () => {
  return (
    <section
      className="testimonials-one pt-120 pb-90"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className="team-about__top">
          <Row className=" align-items-center">
            <Col md={12} lg={7}>
              <div className="block-title">
                <p className="text-white">
                  <img src={heart} width="85" alt="" />
                  Our Testimonials
                </p>
                <h3 className="text-white">
                  Our Reviews verified on RepairPal.
                </h3>
              </div>
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
                If you’re searching for an auto repair team that you can trust,
                look no further than GS Auto Service.
              </p>
            </Col>
          </Row>
        </div>
        <Row>
          {TESTIMONIALS_ONE_DATA.map(
            ({ image, designation, text, name }, index) => (
              <Col lg={4} key={`testimonials-post-key-${index}`}>
                <div className="testimonials-one__single">
                  <div className="testimonials-one__image">
                    <img src={image} alt="" />
                  </div>
                  <p>{text}</p>
                  <h3>{name}</h3>
                  <span>{designation}</span>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsOne;
