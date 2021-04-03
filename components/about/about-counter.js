import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../public/assets/images/shapes/heart-2-1.png";
import aboutImage from "../../public/assets/img/resources/carmoney.png";
import aboutHeart from "../../public/assets/images/shapes/about-count-heart-1-1.png";

const AboutCounter = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="about-counter pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              <p>
                <img src={heartImage} width="15" alt="" />
                Your Car Will Love Us
              </p>
              <h3>Every vehicle comes out better than it came in</h3>
            </div>
            <p className="about-counter__text">
              Save time and money with us as we cut out the need for return
              visits.
            </p>
            <hr />
            <p className="about-counter__text">
              We work on all makes and models of vehicles, so you can rest
              assured that our knowledgeable techs are prepared to handle your
              vehicle.
            </p>
            <ul className="list-unstyled ul-list-one">
              <li>Reliable Service</li>
              <li>Great Communication</li>
              <li>High Quality Parts</li>
            </ul>
            <div className="about-counter__count">
              <h3 className="odometer">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 9587 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Vehicles Repaired</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              <div className="about-counter__image-content">
                <img src={aboutHeart} alt="" />
                <p>
                  We’ve built our reputation on hard work, integrity, and auto
                  repair expertise. And we look forward to gaining your trust
                  and friendship.
                </p>
              </div>
              <img src={aboutImage} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;
