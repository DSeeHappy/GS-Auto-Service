import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import banner1 from "../../public/assets/img/main-slider/mechanicwpaperwengine.png";
import banner2 from "../../public/assets/img/main-slider/oilwengine.png";
import banner3 from "../../public/assets/img/main-slider/handswtransmission.png";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <section className="main-slider main-slider__two">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className=" justify-content-start">
              <Col xl={6} lg={12} className="text-left">
                <p>Family Owned Auto Repair Services</p>
                <h2>Keeping you safe on the road.</h2>
                <a
                  href="#"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn"
                >
                  Call Now
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>

          <Container>
            <Row className=" justify-content-start">
              <Col xl={6} lg={12} className="text-left">
                <p>Family Owned Auto Repair Services</p>
                <h2>Keeping you safe on the road.</h2>
                <a
                  href="#"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn"
                >
                  Call Now
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner3})` }}
          ></div>

          <Container>
            <Row className="justify-content-start">
              <Col xl={6} lg={12} className="text-left">
                <p>Family Owned Auto Repair Services</p>
                <h2>Keeping you safe on the road.</h2>
                <a
                  href="#"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn"
                >
                  Call Now
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
