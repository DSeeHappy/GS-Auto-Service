import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../public/assets/css/animate.min.css";
import "../public/assets/css/azino-icons.css";
import "../public/assets/css/fontawesome-all.min.css";
import "../public/assets/css/main.css";
import "swiper/swiper-bundle.min.css";
import TagManager from "react-gtm-module";
import React, { useEffect } from "react";

const tagManagerArgs = {
  id: "GTM-MK8M97R",
};
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
}
