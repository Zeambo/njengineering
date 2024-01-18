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
import { Row, Col } from "reactstrap";
// core components
import Space from "./index-sections/Space";
import SectionDark from "./index-sections/SectionDark";
import SectionQuotation from "./index-sections/SectionQuotation";

function AboutPage() {
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
          backgroundImage: "url(" + require("assets/img/sub-header1.jpg") + ")",
        }}
        className="page-header page-header-small"
        data-parallax={true}
        ref={pageHeader}
      ></div>
      <Space />
      <div className="main text-center ">
        <Col className="ml-auto mr-auto text-center" md="8">
          <h2>Who We Are..</h2>
          <p>
            We are a Trucking company with branches in Ireland and Zimbabwe. Our
            business is centered on providing local and cross boader cargo
            transportation services, construction machinery, mining machinery,
            and farming machinery. Our vehicle fleet spans from rigid trucks to
            haulage trucks. We pride ourselves in our professionalism and
            Devotion to Excellence which is unmatched in the region and beyond.
          </p>
        </Col>
        <Space />
        <Row>
          <Col className="ml-auto mr-auto text-center" md="4">
            <h3>Our Vision</h3>
            <p>
              To be the leading provider of cargo transportation and machinery
              solutions in Ireland, Zimbabwe and beyond. We aim to achieve this
              by delivering high-quality services that meet and exceed our
              customers' expectations, while ensuring the safety and well-being
              of our employees, partners and communities.
            </p>
          </Col>
          <Col className="ml-auto mr-auto text-center" md="4">
            <h3>Our Core Values</h3>
            <p>
              - Professionalism: We uphold the highest standards of
              professionalism in our work, conduct and communication. We respect
              our clients, colleagues and stakeholders, and we honor our
              commitments and obligations.
              <br /> - Devotion to Excellence: We are passionate about
              delivering the best results for our clients and ourselves. We
              constantly seek to improve our performance, quality and
              innovation. We embrace challenges and learn from our mistakes.
              <br />- Integrity: We act with honesty, transparency and
              accountability in everything we do. We adhere to ethical
              principles and comply with laws and regulations. We take
              responsibility for our actions and their consequences.
            </p>
          </Col>
          <Col className="ml-auto mr-auto text-center" md="4">
            <h3>Our Mission Statement</h3>
            <p>
              To offer reliable, efficient and cost-effective cargo
              transportation and machinery solutions that cater to the diverse
              needs of our clients in various sectors, such as construction,
              mining and farming. We strive to maintain long-term relationships
              with our clients by providing them with professional advice,
              timely delivery and excellent customer service.
            </p>
          </Col>
        </Row>
        <Space />
        <Col className="ml-auto mr-auto text-center" md="8">
          <h2>Have You Met Our Team?</h2>
          <p>
            Our management team consists of experienced and qualified
            professionals who share our vision and values. They are responsible
            for overseeing the strategic direction, operations, and performance
            of our company. Meet our management team below.
          </p>
        </Col>
        <Space />
      </div>
      <SectionQuotation />
      <SectionDark />
      <DemoFooter />
    </>
  );
}

export default AboutPage;
