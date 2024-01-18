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

function ServicesPage() {
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
          backgroundImage: "url(" + require("assets/img/sub-header.jpg") + ")",
        }}
        className="page-header page-header-small"
        data-parallax={true}
        ref={pageHeader}
      ></div>
      <div className="main ">
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <br />
            <h2 className="title">What we do...</h2>
            <h5 className="description">
              Newton Jacha Engineering (Pvt) Ltd is an engineering company that
              focuses on Fix & Supply of Construction equipment and machinery,
              Mining equipment and machinery, and Agriculture equipment and
              machinery. We also offer cargo transportation services. Scroll
              down to learn more about our product catalogue.
            </h5>
            <Space />
            <Space />
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <img
              alt="..."
              className="img-rounded img-responsive"
              src={require("assets/img/mach1.jpg")}
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <h3>Construction Engineering</h3>
            <br />
            <p>
              The construction engineering department of our company supports
              the designing, building and maintainance of various types of
              structures, such as bridges, dams, tunnels and buildings. We
              distribute the latest technologies and methods to ensure the
              safety, quality and efficiency of our projects. We also
              collaborate with other departments and stakeholders to meet the
              needs and expectations of our clients. Our department is divided
              into several subgroups, each with its own specialization and
              responsibilities. Some of the subgroups are: structural
              engineering, geotechnical engineering, environmental engineering,
              transportation engineering and project management. We are always
              looking for new challenges and opportunities to improve our skills
              and knowledge. We are proud of our work and our contribution to
              the development of our society.
            </p>
            <Space />
            <Space />

            <img
              alt="..."
              className="img-rounded img-responsive"
              src={require("assets/img/mach4.jpg")}
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <h3>Mining Engineering</h3>
            <br />
            <p>
              The mining engineering department of our company is responsible
              for supporting the designing, planning and execution of mining
              projects in a safe, efficient and sustainable manner. Our team of
              experts has extensive experience and knowledge in various aspects
              of mining engineering, such as geology, mineral processing, rock
              mechanics, ventilation, environmental management and mine
              economics. We distribute products to support a range of services,
              from feasibility studies and mine design to operational support
              and optimization. Our goal is to help our clients achieve their
              objectives and maximize the value of their mining assets.
            </p>
            <Space />
            <Space />

            <img
              alt="..."
              className="img-rounded img-responsive"
              src={require("assets/img/mach5.jpg")}
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <h3>Agriculture Engineering</h3>
            <br />
            <p>
              We are a team of experts who design, develop and implement
              innovative solutions for the agricultural sector. Our mission is
              to improve the productivity, sustainability and profitability of
              farming systems around the world. We distribute a range of
              equipment and machinery to support soil and water management, crop
              protection, precision agriculture, biotechnology, renewable energy
              and more. We work closely with farmers, researchers, policymakers
              and other stakeholders to ensure that our solutions meet our
              clients` needs and expectations. We are always looking for new
              challenges and opportunities to apply our skills and knowledge to
              the benefit of the society and the environment.
            </p>
            <Space />
            <Space />

            <img
              alt="..."
              className="img-rounded img-responsive"
              src={require("assets/img/truck7.jpg")}
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <h3>Transport Services</h3>
            <br />
            <p>
              The transport department of our company is responsible for
              managing the logistics and delivery of our products and services.
              We have a team of experienced and qualified drivers, dispatchers,
              and coordinators who ensure that our customers receive their
              orders on time and in good condition. We also have a fleet of
              well-maintained vehicles that can handle different types of cargo
              and terrain. Our transport department works closely with other
              departments to optimize the efficiency and quality of our
              operations. We are committed to providing safe, reliable, and
              cost-effective transport solutions for our clients.
            </p>
            <Space />
          </Col>
        </Row>
      </div>
      <SectionQuotation />
      <SectionDark />
      <DemoFooter />
    </>
  );
}

export default ServicesPage;
