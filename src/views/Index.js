import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import WelcomePage from "views/Welcome.js";

import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionQuotation from "./index-sections/SectionQuotation";
import SectionBrands from "./index-sections/SectionBrands";
import SectionFacts from "./index-sections/SectionFacts";
import SectionDark from "./index-sections/SectionDark";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <WelcomePage />
        <SectionFacts />
        <SectionCarousel />
        <SectionBrands />
        <SectionQuotation />
        <SectionDark />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
