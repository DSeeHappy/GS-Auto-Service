import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import brandImage from "../public/assets/img/resources/repairpallogow.png";
import brandImage2 from "../public/assets/img/resources/snaplogow.png";
import brandImage3 from "../public/assets/img/resources/oreillylogosm.png";
import brandImage4 from "../public/assets/img/resources/openbaylogosm.png";

const BrandCarousel = ({ extraClass }) => {
  const brandCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5,
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className={`client-carousel pt-120 pb-120  ${extraClass}`}>
      <Container>
        <Swiper {...brandCarouselOptions}>
          <div className="swiper-wrapper">
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage4} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default BrandCarousel;
