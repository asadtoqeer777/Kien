import React from "react";

import Marquee from "react-fast-marquee";
import Footer from "../footer/Footer";

const AutoScrollFooter = () => (
  <Marquee >
    <Footer/>
    <Footer/>
    <Footer/>
    <Footer/>
    <Footer/>
  </Marquee>
);

export default AutoScrollFooter;