import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import FleetServicesForm from "../components/team/fleet-services-form";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import HeaderTwo from './../components/header/header-two';

const FleetServices = () => {
  return (
    <Layout pageTitle=" Fleet Services || GS Auto || Lakewood Service Center">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Become a Fleet Member" crumbTitle="Become a Fleet Member" />
      <FleetServicesForm />
      <Footer />
    </Layout>
  );
};

export default FleetServices;
