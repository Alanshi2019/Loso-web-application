import React, { Component, Fragment } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./style.css";

class Screens extends Component {
  render() {
    return (
      <Fragment>
        <section className="screens" id="Screens">
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <div className="section-title">
                  <h2> Screens </h2>
                  <p>
                    Mauris a mauris feugiat, luctus mauris a, sollicitudin ex.
                    Pellentesque et tortor in risus elementum aliquet. Etiam
                    facilisis justo urna, id feugiat magna scelerisque non.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="screen-slider">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="./images/screen-01.png"
                  width="60"
                  height="60"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="./images/screen-02.png"
                  width="60"
                  height="60"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="./images/screen-04.png"
                  width="60"
                  height="60"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Screens;
