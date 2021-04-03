import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage from "../public/assets/img/services/GS_Auto_Service_Lakewood_CO_Oil_Change_Car_340x290.png"
const FeaturedCause = () => {
  return (
    <section className="featured-cause">
      <Container>
        <div className="inner-container background-secondary ">
          <Row>
            <Col lg={4}>
              <img src={causeImage} className="img-fluid" alt="" />
            </Col>
            <Col lg={8} className=" d-flex">
              <div className="my-auto">
                <h3>From Basic Maintenance to Major Repairs</h3>
                <p>
                  Our expert technicians stay informed of all new technologies
                  and innovations.
                </p>
                <hr />
                <p>
                  We use state-of-the-art diagnostic equipment to make sure all
                  vehicle diagnoses are accurate.
                </p>
                <div className="cause-card__top">
                  <p>
                    If you’re searching for an auto repair team that you can
                    trust, look no further than GS Auto Service.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCause;
