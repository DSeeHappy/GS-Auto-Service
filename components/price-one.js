import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../public/assets/img/GSLogoLight.png";
import priceBox from "../public/assets/img/services/GS_Auto_Service_Lakewood_CO_Car_Inspection_200x197.png";
const PRICE_ONE_DATA = [
  {
    title: "Regular & Synthetic Oil Changes",
    icon: "fa fa-car",
    extraClassName: "",
    price: "Speedy Service",
    options: [
      {
        text: "Cars, Trucks, Suv's, RV's & Boats",
      },
      {
        text: "We make sure the lifeblood of your vehicle is always fresh",
      }
    ],
    button: {
      link: "tel:303-525-4209",
      label: "Call Now",
    },
  },
  {
    title: "Brakes Services",
    icon: "fa fa-car",
    extraClassName: "gold",
    price: "Quality Parts",
    options: [
      {
        text: "Safety is always number one priority",
      },
      {
        text: "If you hear a squeaky break, its likely time for replacement",
      }
    ],
    button: {
      link: "tel:303-525-4209",
      label: "Call Now",
    },
  },
];
const PriceOne = () => {
  return (
    <section className="price-one">
      <Container>
        <Row>
          <Col xl={5}>
            <div className="price-one__main">
              <div className="block-title">
                <p className="text-white">
                  <img src={heart} width="85" alt="" />
                  Popular Services
                </p>
                <h3>Prepare your vehicle for the Summer</h3>
              </div>
              <p>
                Depending on how often you drive, you may want to look into
                regular vehicle maintenance to ensure proper vehicle health. Our
                professionals are ready to make sure your car, truck, RV or Boat
                are always ready.
              </p>
              <div className="price-one__image-box">
                <img src={priceBox} alt="" />
                <div className="price-one__image-box-content">
                  <h3>
                    <i className="fa fa-check"></i> A/C Maintenance Check
                  </h3>
                  <p>
                    Is your A/C starting to blow hot air or just not cutting it
                    overall? You may need A/C Maintenance before the coming
                    summer.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <Row>
              {PRICE_ONE_DATA.map(
                (
                  { title, icon, price, extraClassName, options, button },
                  index
                ) => (
                  <Col md={6} key={`price-one-key-${index}`}>
                    <div className={`price-one__single ${extraClassName}`}>
                      <i className={icon}></i>
                      <p>{title}</p>
                      <h3>{price}</h3>
                      <ul className="price-one__list">
                        {options.map(({ text }, index) => (
                          <li key={`price-one-list-key-${index}`}>{text}</li>
                        ))}
                      </ul>
                      <Link href={button.link}>
                        <a className="thm-btn dynamic-radius">{button.label}</a>
                      </Link>
                    </div>
                  </Col>
                )
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PriceOne;
