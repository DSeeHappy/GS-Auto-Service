import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../public/assets/img/services/GS_Auto_Service_Lakewood_CO_Laptop_On_Car.png";
import image2 from "../../public/assets/img/services/GS_Auto_Service_Lakewood_CO_AC_Car_Engine_Oil_370x461.png";
import image3 from "../../public/assets/img/services/GS_Auto_Service_Lakewood_CO_AC_Car_Brown_370x461.png";

const SERVICE_TWO_DATA = [
  {
    extraClassName: "background-primary",
    image: image1,
    title: "All Makes & Models ",
    text: "We repair all Makes & Models as well as RV's and Boats",
    link: "#",
  },
  {
    extraClassName: "background-secondary",
    image: image2,
    title: "Repairs & Maintenance",
    text:
      "From Basic Maintenance to Major Overhauls, your vehicle will feel like new",
    link: "#",
  },
  {
    extraClassName: "background-base",
    image: image3,
    title: "A/C Services",
    text:
      "We Provide A/C Repair & Maintenance to make sure your vehicle is always ready for the Colorado Heat",
    link: "#",
  },
];
const ServiceTwo = () => {
  const sliderOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="service-two">
      <Container>
        <Swiper {...sliderOptions}>
          {SERVICE_TWO_DATA.map(
            ({ extraClassName, image, title, text, link }, index) => (
              <SwiperSlide key={`service-two-key-${index}`}>
                <div
                  className={`service-two__box ${extraClassName}`}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="service-two__box-inner">
                    <i class="fas fa-car"></i>
                    <p>{text}</p>
                    <h3>
                      <Link href={link}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <Link href={link}>
                      <a className="service-two__box-link">
                        <i className="far fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default ServiceTwo;
