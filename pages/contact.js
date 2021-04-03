import React from "react";
import Layout from "../components/layout";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import GoogleMap from "../components/google-map";
import ContactFormOne from "../components/contact/contact-form-one";
import ContactCardCarousel from "../components/contact/contact-card-carousel";
import Footer from "../components/footer";
import HeaderTwo from './../components/header/header-two';

const Contact = () => {
  return (
    <Layout pageTitle="Contact Us || GS Auto Service || Lakewood Service Center">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Contact Us" crumbTitle="Contact Us" />
      <ContactFormOne />
      <ContactCardCarousel />
      <GoogleMap extraClass="contact" />
      <Footer />
    </Layout>
  );
};

export default Contact;
