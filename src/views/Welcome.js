import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function WelcomePage() {
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
                <h2 className="title">We Welcome You!</h2>
                <h5 className="description">
                  We are a Trucking company with branches in Ireland and
                  Zimbabwe. Our business is centered on providing local and
                  cross boader cargo transportation services, construction
                  machinery, mining machinery, and farming machinery. Our
                  vehicle fleet spans from rigid trucks to haulage trucks. We
                  pride ourselves in our professionalism and Devotion to
                  Excellence which is unmatched in the region and beyond.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="/services"
                  onClick={(e) => e.preventDefault()}
                >
                  Services
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-delivery-fast" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Transportation</h4>
                    <p className="description">
                      Looking for a reliable and efficient transport service?
                      Look no further than our transport business! We offer a
                      wide range of transportation services, including cargo and
                      equipment shipping. Our experienced drivers and
                      state-of-the-art vehicles ensure that your goods are
                      transported safely and on time.
                    </p>
                    <Button className="btn-link" color="info" href="/services">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-istanbul" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Construction</h4>
                    <p>
                      Do you have a complex construction project? Get in touch
                      with us for all your machinery and equipment supplies. We
                      have bulldozers, graders, concrate mixers, scaffolds and
                      many more...
                    </p>
                    <Button className="btn-link" color="info" href="/services">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-zoom-split" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Mining</h4>
                    <p>
                      Our mining engineering division specializes on supporting
                      mining projects with the needed equipment supply and fix.
                      Our equipment is designed to minimize the environmental
                      impact of mining activities, provide safety to workers
                      whilst rewarding you with the best returns on your
                      investment.
                    </p>
                    <Button className="btn-link" color="info" href="/services">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Farming</h4>
                    <p>
                      Our Agriculture Engineering department is structured to
                      serve you with the design, development and implementation
                      of agricultural systems and equipment. Its sole mandate is
                      to improve the efficiency and sustainability of your
                      agricultural projects.
                    </p>
                    <Button className="btn-link" color="info" href="/services">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
