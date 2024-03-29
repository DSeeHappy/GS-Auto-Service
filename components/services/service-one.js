import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../public/assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../public/assets/images/shapes/service-line-1-1.png";
import blockTitleHeart from "../../public/assets/images/shapes/heart-2-1.png";

const serviceOneData = [
  {
    icon: "azino-icon-water-bottle",
    extraClassName: "background-secondary",
    title: "Water",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#"
  },
  {
    icon: "azino-icon-hamburger",
    title: "Food",
    extraClassName: "background-base",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#"
  },
  {
    icon: "azino-icon-reading-book",
    title: "Education",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#",
    extraClassName: "background-primary"
  },
  {
    icon: "azino-icon-stethoscope",
    title: "Medical",
    extraClassName: "background-special",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#"
  }
];

const ServiceOne = () => {
  return (
    <section
      className="service-one pt-120 pb-90"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <p>
            <img src={blockTitleHeart} width="15" alt="" />
            Welcome to Azino Charity
          </p>
          <h3>
            We believe that we can save <br /> more lifes with you.
          </h3>
        </div>
        <Row>
          {serviceOneData.map(
            ({ icon, title, text, link, extraClassName }, index) => (
              <Col md={6} lg={3} key={`service-one-key-${index}`}>
                <div className={`service-one__box`}>
                  <div className={`service-one__icon ${extraClassName}`}>
                    <div className="service-one__icon-inner">
                      <i className={icon}></i>
                    </div>
                  </div>
                  <h3>
                    <Link href={link}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <p>{text}</p>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
