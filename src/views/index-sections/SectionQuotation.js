import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const SectionQuotation = () => {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Request For Quotation</h2>
              <br />
              <br />
              <form>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Label for="inputEmail4">Company Name</Label>
                    <Input
                      type="name"
                      id="inputName"
                      placeholder="Company Name"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-6">
                    <Label for="inputEmail4">Email</Label>
                    <Input type="email" id="inputEmail4" placeholder="Email" />
                  </FormGroup>
                </div>
                <FormGroup>
                  <Label for="inputAddress">Address</Label>
                  <Input
                    type="text"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </FormGroup>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Label for="inputCity">City</Label>
                    <Input type="text" id="inputCity" />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Label for="inputState">State</Label>
                    <Input type="select" name="select" id="inputState">
                      <option>Choose...</option>
                      <option>...</option>
                    </Input>
                  </FormGroup>
                  <FormGroup className="col-md-2">
                    <Label for="inputZip">Zip</Label>
                    <Input type="text" id="inputZip" />
                  </FormGroup>
                </div>
                <div className="form-row">
                  <FormGroup className="col-md-12">
                    <Label for="inputMessage">Message</Label>
                    <Input
                      type="textarea"
                      placeholder="Please describe the service you are looking for..."
                      id="inputMessage"
                      rows="5"
                    />
                  </FormGroup>
                </div>
                <FormGroup check>
                  <Label className="form-check-label">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    Check me out
                    <span className="form-check-sign">
                      <span className="check"></span>
                    </span>
                  </Label>
                </FormGroup>
                <Button type="submit" color="danger">
                  Submit
                </Button>
              </form>
            </Col>
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
                  style={{ width: "100%" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SectionQuotation;
