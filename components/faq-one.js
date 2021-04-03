import React, { useContext } from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import heart from "../public/assets/images/shapes/heart-2-1.png";
import heart1 from "../public/assets/images/shapes/about-count-heart-1-1.png";
import faqImage from "../public/assets/img/services/GS_Auto_Service_Lakewood_CO_Engine_Check_962x644.png";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2
      className="para-title"
      style={{ color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}` }}
    >
      <span onClick={decoratedOnClick}>
        <i
          style={{
            color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}`,
          }}
          className={`far ${isCurrentEventKey ? "fa-minus" : "fa-plus"}`}
        ></i>
        {children}
      </span>
    </h2>
  );
};
const FaqOne = () => {
  return (
    <section className="faq-one pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="faq-one__content">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  Quality Vehicle Care
                </p>
                <h3>Frequently Asked Questions</h3>
              </div>

              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="1"
                className="list-unstyled"
              >
                <Card as="li">
                  <ContextAwareToggle eventKey="0">
                    Why is it important to regularly change my oil?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      It is important to regularly change your oil to protect
                      your engine and it helps it last longer to keep your
                      vehicle healthy. Without regular oil chnages, you can
                      leave deposits, sludge and buildup which over time can
                      cause an early end to your engine.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    How often should I check my tire pressure
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      It is recommended to check roughly once a month,
                      especially during the change of the seasons you can see a
                      decrease in pressure the colder it gets. Without properly
                      pressured tires your engine will work harder, decreasing
                      your gas mileage along with it.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    Will old spark plugs mess up my car?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      Modern vehicles can last a long time without replacing
                      spark plugs, old spark plugs in and of themselves wouldn't
                      mess up your car. However old spark plugs may not be
                      functioning correctly which means they may not be getting
                      proper combustion in the engine. Over time this can cause
                      other things on the engine to not run properly. Always
                      have your vehicle inspected to ensure proper
                      functionality.
                    </p>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              <div className="about-counter__image-content">
                <img src={heart1} alt="" />
                <p>Regular Maintenace is essential to your vehicle's overall health</p>
              </div>
              <img src={faqImage} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqOne;
