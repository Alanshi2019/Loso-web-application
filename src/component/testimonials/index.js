import React, { Component, Fragment } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import "./style.css";
class Testimonials extends Component {
  render() {
    return (
      <Fragment>
        <section className="testimonial">
          <div className="testimonial-overlay">
            <Container>
              <Row>
                <Col md={12}>
                  <Carousel>
                    <Carousel.Item>
                      <Image
                        className="d-block"
                        src="./images/client-01.jpg"
                        alt="Second slide"
                      />

                      <Carousel.Caption className="testimonial-caption">
                        <h3>Daniel</h3>
                        <h4>
                          <span> Sr. Software Engineer, </span>Blue Gyms
                        </h4>
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip.”
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        className="d-block"
                        src="./images/client-02.jpg"
                        alt="Second slide"
                      />

                      <Carousel.Caption className="testimonial-caption">
                        <h3>Rauls Pole</h3>
                        <h4>
                          <span> Marketting Manager, </span>Risko
                        </h4>
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip.”
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        className="d-block"
                        src="./images/client-03.jpg"
                        alt="Third slide"
                      />

                      <Carousel.Caption className="testimonial-caption">
                        <h3>Jim So</h3>
                        <h4>
                          <span> Assistan Manager, </span>Gidfo
                        </h4>
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip.”
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Testimonials;
