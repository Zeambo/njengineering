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
                  href="#pablo"
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
                      We are built to transport packed and unpacked cargo,
                      machinery and equipment.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
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
                      Excavators, Backhoes, Pavers, Concrate mixers, Bulldozers,
                      Graders...
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
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
                      Dragline excavator, Wheel tractor scrapers, Bulldozer,
                      Dump Truck, Drill, Crane lift...
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
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
                      Tractors, Boom spray, Planter, Combine harvester, Ballers,
                      Harrows...
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
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
