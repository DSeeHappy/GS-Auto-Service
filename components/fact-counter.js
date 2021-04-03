import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";

const FACT_COUNTER_DATA = [
  {
    count: 8860,
    text: "Oil Changes",
  },
  {
    count: 4256,
    text: "Brake Replacement",
  },
  {
    count: 6208,
    text: "Front End & Suspension",
  },
  {
    count: 2960,
    text: "A/C Maintenance",
  },
];
const FactCounter = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="fact-counter">
      <Container>
        <Row>
          {FACT_COUNTER_DATA.map(({ count, text }, index) => (
            <Col
              md={6}
              lg={3}
              className="text-center"
              key={`fact-counter-key-${index}`}
            >
              <h3>
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? count : 0} />
                </VisibilitySensor>
              </h3>
              <p>{text}</p>
              <a href="#">+</a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FactCounter;
