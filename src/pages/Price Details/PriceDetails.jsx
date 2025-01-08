import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Container,
  Col,
  Spinner,
  Input,
  Label,
  Button,
} from "reactstrap";
import React, { useMemo, useState } from "react";

function PriceDetails() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Col>
            <Row>
              <CardTitle className="text mb-4">Pricing Details</CardTitle>
            </Row>
          </Col>
          <Row>
            <Card>
              <CardTitle className="text mt-3">Coin Price</CardTitle>
              <CardBody>
                <Row>
                  <Col lg={3}>
                    <Label>Coins</Label>
                    <Input id="coin" type="number" placeholder="Enter" />
                  </Col>
                  <Col lg={3}>
                    <Label>Price per coin</Label>
                    <Input id="coin" type="number" placeholder="Enter" />
                  </Col>
                  <Col lg={6} />
                </Row>
                <Row className="justify-content-end mt-3">
                  <Col lg={3} className="text-end">
                    <Button
                      style={{
                        backgroundColor: "#8243D9",
                        borderColor: "#8243D9",
                      }}
                    >
                      Allocate
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card>
              <CardTitle className="text mt-3">Audio Call Pricing</CardTitle>
              <CardBody>
                <Row>
                  <Col lg={3}>
                    <Label>Audio Call (Minute)</Label>
                    <Input id="coin" type="number" placeholder="Enter" />
                  </Col>
                  <Col lg={3}>
                    <Label>Coin per min</Label>
                    <Input id="coin" type="number" placeholder="Enter" />
                  </Col>
                  <Col lg={6} />
                </Row>
                <Row className="justify-content-end mt-3">
                  <Col lg={3} className="text-end">
                    <Button
                      style={{
                        backgroundColor: "#8243D9",
                        borderColor: "#8243D9",
                      }}
                    >
                      Allocate
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card>
              <CardTitle className="text mt-3">Video Call Pricing</CardTitle>
              <CardBody>
                <Row>
                  <Col lg={3}>
                    <Label>Video Call (Minute)</Label>
                    <Input id="coin" type="number" placeholder="Enter" />
                  </Col>
                  <Col lg={3}>
                    <Label>Coin per min</Label>
                    <Input id="coin" type="number" placeholder="Enter" />
                  </Col>
                  <Col lg={6} />
                </Row>
                <Row className="justify-content-end mt-3">
                  <Col lg={3} className="text-end">
                    <Button
                      style={{
                        backgroundColor: "#8243D9",
                        borderColor: "#8243D9",
                      }}
                    >
                      Allocate
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default PriceDetails;
