import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import TeamPage from "../components/team/team-page";
import Footer from "../components/footer";
import HeaderTwo from './../components/header/header-two';

const Services = () => {
  return (
    <Layout pageTitle="Services || GS Auto || Lakewood Service Center">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Our Services" crumbTitle="Our Services" />
      <Footer />
    </Layout>
  );
};

export default Services;
