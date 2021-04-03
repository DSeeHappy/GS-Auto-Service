import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../public/assets/img/GSLogo.png";

const VolunteerForm = () => {
  return (
    <section className="become-volunteer pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="become-volunteer__content mb-40">
              <div className="block-title">
                <p>
                  <img src={heart} width="85" alt="" />
                  Join Us Now
                </p>
                <h3>
                  Register yourself as <br /> our Fleet Member.
                </h3>
              </div>
              <p className="block-text mb-40 pr-10">
                We provide fleet discounts and fleet billing management.All our
                fleet members can expect prompt communication and service.
              </p>
              <ul className="list-unstyled ul-list-one">
                <li>Quality Services.</li>
                <li>Speedy repair.</li>
                <li>Quality Parts</li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <form   data-netlify="true"
              name="Fleet Services v0.01"
              method="POST"
              data-netlify-honeypot="bot-field"
              onSubmit="submit"  className="contact-form-validated become-volunteer__form form-one mb-40">
            <div hidden>
                <input name="bot-field" />
              </div>
              <input
                type="hidden"
                name="form-name"
                value="Fleet Services v0.01"
              />
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="date-of-birth" className="sr-only">
                    date of birth
                  </label>
                  <input
                    type="text"
                    name="date"
                    id="date-of-birth"
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="address" className="sr-only">
                    address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="occupation" className="sr-only">
                    occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    id="occupation"
                    placeholder="Occupation"
                  />
                </div>
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write a Message"
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn ">
                    Register Now
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VolunteerForm;
