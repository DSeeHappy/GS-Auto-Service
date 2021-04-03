import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import AboutCounter from "../components/about/about-counter";
import VideoCard from "../components/videos/video-card";
import FeaturedCause from "../components/featured-cause";
import ServiceTwo from "../components/services/service-two";
import FaqOne from "../components/faq-one";
import CausesHome from "../components/causes/causes-home";
import PriceOne from "../components/price-one";
import FactCounter from "../components/fact-counter";
import BrandCarousel from "../components/brand-carousel";
import TestimonialsOne from "../components/testimonials/testimonials-one";
import GalleryHomeTwo from "../components/gallery/gallery-home-two";
import BlogHomeTwo from "../components/blog/blog-home-two";
import EventHomeTwo from "../components/event/event-home-two";
import Footer from "../components/footer";
import Financing from "../components/call-to-action/call-to-action-two";
import GoogleMap from "../components/google-map";
import CallToAction from "../components/call-to-action/call-to-action";

const FleetServices = () => {
  return (
    <Layout pageTitle="GS Auto Service || Lakewood Service Center">
      <HeaderTwo />
      <StickyHeader extraClassName="stricky-header-two" />
      <MainSliderTwo />
      <ServiceTwo />
      <AboutCounter />
      <Financing/>
      <CausesHome />
      <VideoCard />
      <FeaturedCause />
      <FaqOne />
      <TestimonialsOne />
      <FactCounter />
      <PriceOne />
      <BrandCarousel extraClass="client-carousel__has-border-top" />
      <CallToAction />

      <GoogleMap extraClass="home" />

      <Footer />
    </Layout>
  );
};

export default FleetServices;
