import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function SectionBrands() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Do You Know Our Trusted Brands?</h2>
                <h5 className="description">
                  If you are looking for a proven track record of delivering
                  high-quality products and services to customers, these brands
                  are known for their reliability, durability, and innovation.
                  Whether you’re looking for agricultural machinery,
                  construction equipment, or mining equipment, these brands are
                  sure to meet your needs...
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <div className="section text-center  ml-auto mr-auto" md="8">
              <Row>
                <Col md="3">
                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/9icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/8icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </Col>

                <Col md="3">
                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/7icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/0icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />

                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/3icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </Col>

                <Col md="3">
                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/4icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/1icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/5icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </Col>
                <Col md="3">
                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/6icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="info">
                    <img
                      alt="..."
                      className="img-responsive"
                      src={require("assets/img/brands/2icon.png")}
                      style={{ width: "30%" }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionBrands;
