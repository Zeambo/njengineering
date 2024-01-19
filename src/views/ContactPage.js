/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import DemoFooter from "components/Footers/DemoFooter";
import IndexNavbar from "components/Navbars/IndexNavbar";
import React from "react";

// reactstrap components
// core components
import Space from "./index-sections/Space";
import SectionDark from "./index-sections/SectionDark";
import SectionQuotation from "./index-sections/SectionQuotation";

function ContactPage() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <IndexNavbar />
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/sub-header2.jpg") + ")",
        }}
        className="page-header page-header-small"
        data-parallax={true}
        ref={pageHeader}
      ></div>
      <Space />
      <div className="main ">
        <div className="info">
          <div className="text-center" md="8">
            <div className="icon icon-info">
              <i className="nc-icon nc-pin-3" />
            </div>
            <h2>Address</h2>
            <h5>
              37 Ashfield Blackbog Rd <br />
              Carlow <br />
              Republic of Ireland
            </h5>
            <Space />
            <h5>
              448/449 Sadza Growth Point <br /> Sadza <br />
              Zimbabwe
            </h5>
            <Space />
            <Space />
            <div className="icon icon-info">
              <i className="nc-icon nc-badge" />
            </div>
            <h2>Phone</h2>
            <h5>+353 89 273 1581</h5>
            <Space />
            <Space />
            <div className="icon icon-info">
              <i className="nc-icon nc-email-85" />
            </div>
            <h2>Email</h2>
            <h5>sales@newtonjachaeng.com</h5>
            <Space />
            <Space />
          </div>
        </div>
      </div>

      <SectionQuotation />
      <SectionDark />
      <DemoFooter />
    </>
  );
}

export default ContactPage;
