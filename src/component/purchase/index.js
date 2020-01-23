import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

class Purchase extends Component {
  render() {
    return (
      <Fragment>
        <section className="purchase-now">
          <Container>
            <Row>
              <Col md={9}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et olore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
              </Col>
              <Col md={3}>
                <Button className="btn-pruchase-now" variant="primary" href="#">
                  Purchase Now
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Purchase;
