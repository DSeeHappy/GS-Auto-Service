import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cardBg from "../../public/assets/images/shapes/contact-card-bg-1-1.png";

const ContactCardCarousel = () => {
  const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      480: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="contact-card-carousel ">
      <div className="container">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <div
              className="contact-card d-flex flex-column text-center justify-content-center align-items-center background-secondary"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <i aria-label="contact icon" className="azino-icon-family"></i>
              <h3>About</h3>
              <p>
                After 20 years of experience, Gilberto the Owner of GS Auto
                Service felt 2018 was the year to move to a new location and set
                up a new shop. 
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="contact-card d-flex flex-column text-center justify-content-center align-items-center background-primary"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <i aria-label="contact icon" className="azino-icon-address"></i>
              <h3>Address</h3>
              <p>
                5420 W Alameda Ave, <br /> Lakewood, CO
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="contact-card d-flex flex-column text-center justify-content-center align-items-center background-special"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <i aria-label="contact icon" className="azino-icon-contact"></i>
              <h3>Contact</h3>
              <p>
                <a href="mailto:gilsa33@yahoo.com">gilsa33@yahoo.com</a> <br />{" "}
                <a href="tel:303-525-4209">(303) 525-4209</a>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ContactCardCarousel;
