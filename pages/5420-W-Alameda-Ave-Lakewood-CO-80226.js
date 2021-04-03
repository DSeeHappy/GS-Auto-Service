import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";

import detailsImage from "../public/assets/images/events/event-details-1-1.jpg";
import HeaderTwo from "./../components/header/header-two";

const EventDetails = () => {
  return (
    <Layout pageTitle="Store Location || GS Auto Service || Lakewood Service Center">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader
        title="Store Location"
        crumbTitle="5420 W Alameda Ave, Lakewood, CO 80226"
      />
      <>
        <section className="event-details pt-120">
          <Container>
            <Row>
              <Col md={12} lg={6}>
                <h3>Lakewood Service Center</h3>
                <hr />
                <p>Don't get thrown off by the location</p>
                <p>
                  We are behind Asaderos Mexican Restaurant so we can provide
                  great parking.
                </p>
              </Col>
              <Col md={12} lg={6}>
                <img src={detailsImage} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </section>
        <div className="event-infos pt-20 pb-90">
          <Container>
            <Row>
              <Col md={12} lg={4} className="mb-30">
                <div className="event-infos__single background-secondary">
                  <h3>Quality Local Auto Repair</h3>
                  <ul className="list-unstyled event-infos__list">
                    <li>Oil Changes</li>
                    <li>Brake Services</li>
                    <li>Front-End &amp; Suspension</li>
                    <li>A/C Maintenance</li>
                  </ul>

                
                  <div className="event-infos__social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={4} className="mb-30">
                <div className="google-map__event">
                  <iframe
                    title="template google map"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRUbYeMCAa4cRKXgqZcOaVa4&key=AIzaSyBxrjs1NoCqtnd1vKKXe-uRdqzcaHUEyv0"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
              <Col md={12} lg={4} className="mb-30">
                <div className="event-infos__single background-special">
                  <h3>Gilberto Sanchez | Owner</h3>
                  <p>
                    With over 20 years of experience, you are in great hands
                  </p>
                  <ul className="list-unstyled event-infos__list event-infos__list-has-icons">
                    <li>
                      <i className="azino-icon-telephone"></i>
                      <a href="tel:303-525-4209">(303) 525-4209</a>
                    </li>
                    <li>
                      <i className="azino-icon-email"></i>
                      <a href="mailto:gilsa33@yahoo.com">gilsa33@yahoo.com</a>
                    </li>
                    <li>
                      <i className="azino-icon-pin"></i>
                      <a href="https://www.google.com/maps/place/GS+Auto+Service/@39.7097463,-105.0581813,17z/data=!3m1!4b1!4m5!3m4!1s0x876b80c078d84645:0xae559ac3652a7829!8m2!3d39.7097463!4d-105.0559926">
                        {" "}
                        5420 W Alameda Ave, Lakewood, CO 80226
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
      <Footer />
    </Layout>
  );
};

export default EventDetails;
