import React from "react";

import { Container, Row, Col } from "reactstrap";

const SectionFacts = () => {
  return (
    <>
      <div className="section text-center">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className=" ">
                <br />
                <br />
                <br />
                <br />

                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/watermark-06.png")}
                  style={{ width: "50%" }}
                />
              </div>
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Interesting Fact...</h2>
              <br />
              <br />
              <h5>
                The first recorded engineer was Imhotep, who lived in ancient
                Egypt around 2600 BC. He was an architect, engineer, and
                physician who designed the Pyramid of Djoser
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SectionFacts;
