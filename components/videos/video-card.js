import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Container } from "react-bootstrap";
import bgImage from "../../public/assets/img/backgrounds/GS_Auto_Service_Lakewood_CO_RV_Mountains_1894x884.png";
import heart from "../../public/assets/img/shapes/carrepairicon.png";

const VideoCard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card ">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId=""
        onClose={() => setOpen(false)}
      />
      <div
        className="video-card__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Container className=" text-center pt-120 pb-120">
        <img src={heart} width="85" alt="" />

        <p className="text-white">
          After 20 years of experience, Gilberto the Owner of GS Auto Service
          felt 2018 was the year to move to a new location and set up a new
          shop.
        </p> 
        <p className="text-white">
          Having worked at many locations around Denver, this breadth of
          experience is available near Belmar.{" "}
        </p>
        <h3>GS Auto Service</h3>
        <hr />
        <h3>Lakewood Service Center</h3>
        <div className="video-card__btn-block">
          <Link href="/cause-details">
            <a href="tel:303-525-4209" className="thm-btn dynamic-radius">
              Call Now
            </a>
          </Link>

          <span
            onClick={() => setOpen(true)}
            className="video-popup video-card__btn"
          >
            <i className="fa fa-play"></i>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default VideoCard;
