import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import AboutCounter from "../components/about/about-counter";
import ServiceTwo from "../components/services/service-two";
import VideoCard from "../components/videos/video-card";
import TestimonialsOne from "../components/testimonials/testimonials-one";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";

const About = () => {
  return (
    <Layout pageTitle="About Page || GS Auto Service || Lakewood Service Center">
      <HeaderTwo />
      <PageHeader title="About GS Auto Service" crumbTitle="About" />
      <StickyHeader />
      <AboutOne />
      <BrandCarousel extraClass="client-carousel__has-border-top" />
      <AboutCounter />
      <VideoCard />
      <TestimonialsOne />
      <Footer />
    </Layout>
  );
};

export default About;
