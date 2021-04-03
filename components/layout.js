import React, { useEffect } from "react";
import Head from "next/head";
import MobileNav from "./mobile-nav";
import SearchPopup from "./search-popup";

import AppleTouch from "../public/assets/img/favicons/apple-icon-180x180.png";
import Fevicon32 from "../public/assets/img/favicons/favicon-32x32.png";
import Fevicon16 from "../public/assets/img/favicons/favicon-16x16.png";

const Layout = ({ pageTitle, children }) => {
  const handleRadius = () => {
    const dynamicRadius = document.querySelectorAll(".dynamic-radius");
    dynamicRadius.forEach(function (btn) {
      let btnHeight = btn.offsetHeight;
      btn.style.borderBottomLeftRadius = btnHeight / 2 + "px";
      btn.style.borderTopLeftRadius = btnHeight / 2 + "px";
    });
  };

  useEffect(() => {
    handleRadius();
    return () => {
      handleRadius();
    };
  });
  return (
    <div>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={Fevicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Fevicon16} />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="title"
          content="GS Auto Service | Lakewood Service Center"
        />
        <meta
          name="description"
          content="If you’re searching for an auto repair team that you can trust, look no further than GS Auto Service in Lakewood on Alameda.

"
        />
        <meta property="fb:app_id" content="2897011323907888" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gsautoservice.co/" />
        <meta property="og:type" content="business.business" />

        <meta
          property="og:title"
          content="GS Auto Service | Lakewood Service Center"
        />
        <meta
          property="og:description"
          content="If you’re searching for an auto repair team that you can trust, look no further than GS Auto Service in Lakewood on Alameda.

"
        />
        <meta
          property="og:image"
          content="https://gsauto.s3-us-west-2.amazonaws.com/GS-Auto-Service-Lakewood-Service-Center-CO-1200x628.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gsautoservice.co/" />
        <meta
          property="twitter:image:alt"
          content="GS Auto Service Lakewood CO Auto Repair Services"
        />
        <meta
          property="twitter:title"
          content="GS Auto Service | Lakewood Service Center"
        />
        <meta
          property="twitter:description"
          content="If you’re searching for an auto repair team that you can trust, look no further than GS Auto Service in Lakewood on Alameda.

"
        />
        <meta
          property="twitter:image"
          content="https://gsauto.s3-us-west-2.amazonaws.com/GS-Auto-Service-Lakewood-Service-Center-CO-1200x628.png"
        />
        <link rel="canonical" href="https://gsautoservice.co" />
        <meta
          property="business:contact_data:street_address"
          content="5420 West Alameda Ave"
        />
        <meta property="business:contact_data:locality" content="Lakewood" />
        <meta property="business:contact_data:region" content="Colorado" />
        <meta property="business:contact_data:postal_code" content="80226" />
        <meta
          property="business:contact_data:country_name"
          content="United States"
        />
        <meta property="og:site_name" content="GS Auto Service" />

      </Head>
      <div className="page-wrapper" id="wrapper">
        {children}
      </div>
      <MobileNav />
      <SearchPopup />
    </div>
  );
};

export default Layout;
