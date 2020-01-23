import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobile,
  faEye,
  faCertificate,
  faRss,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
class Features extends Component {
  render() {
    return (
      <Fragment>
        <section className="features">
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <div className="section-title">
                  <h2>Features</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="features-inner-wrapper">
            <Container>
              <Row>
                <Col lg={4} md={12}>
                  <div className="left-feature-item">
                    <div className="left-feature-item-icon">
                      <FontAwesomeIcon icon={faDesktop} />
                    </div>
                    <h3>RETINA READY</h3>
                    <p>
                      Lorem ipsum dolor, consectetur sed do adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                  <div className="left-feature-item">
                    <div className="left-feature-item-icon">
                      <FontAwesomeIcon icon={faMobile} />
                    </div>
                    <h3>MOBILE READY</h3>
                    <p>
                      Lorem ipsum dolor, consectetur sed do adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                  <div className="left-feature-item">
                    <div className="left-feature-item-icon">
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                    <h3>EASY LAYOUT</h3>
                    <p>
                      Lorem ipsum dolor, consectetur sed do adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="feature-iphone">
                    <img src="./images/iphone-02.png" alt="iphone" />
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="right-feature-item">
                    <div className="right-feature-item-icon">
                      <FontAwesomeIcon icon={faCertificate} />
                    </div>
                    <h3> CERTIFIED SOLUTION</h3>

                    <p>
                      Lorem ipsum dolor, consectetur sed do adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                  <div className="right-feature-item">
                    <div className="right-feature-item-icon">
                      <FontAwesomeIcon icon={faRss} />
                    </div>
                    <h3> CONSTANT FEED</h3>

                    <p>
                      Lorem ipsum dolor, consectetur sed do adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                  <div className="right-feature-item">
                    <div className="right-feature-item-icon">
                      <FontAwesomeIcon icon={faDatabase} />
                    </div>
                    <h3> SECURE DATA</h3>

                    <p>
                      Lorem ipsum dolor, consectetur sed do adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Features;
