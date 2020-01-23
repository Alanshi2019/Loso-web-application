import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faWindows } from "@fortawesome/free-brands-svg-icons";
import "./style.css";
class Download extends Component {
  render() {
    return (
      <Fragment>
        <section className="download-now" id="DOWNLOAD">
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <div className="section-title">
                  <h2> Download Now </h2>
                  <p>
                    Vestibulum congue eros ac neque dignissim, vel imperdiet
                    neque consectetur. Maecenas condimentum cursus maximus.
                    Praesent eu diam efficitur
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <img
                  src="http://localhost:3000/images/download-screen.png"
                  alt="download screen"
                  fluid
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="available-on">
          <Container>
            <Row>
              <Col md={6}>
                <div className="available-title">
                  <h2>Available On </h2>

                  <p>
                    Vestibulum congue eros ac neque dignissim, vel imperdiet
                    neque consectetur. Maecenas condimentum cursus maximus.
                    Praesent eu diam efficitur
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={4} className="no-padding">
                    <a href="#">
                      <div className="available-on-item">
                        <FontAwesomeIcon className="fontAI" icon={faAppleAlt} />
                        <div className="available-on-inner">
                          <h2> IOS</h2>
                        </div>
                      </div>
                    </a>
                  </Col>

                  <Col md={4} className="no-padding">
                    <a href="#">
                      <div className="available-on-item">
                        <FontAwesomeIcon className="fontAI" icon={faAndroid} />
                        <div className="available-on-inner">
                          <h2> ANDROID</h2>
                        </div>
                      </div>
                    </a>
                  </Col>

                  <Col md={4} className="no-padding">
                    <a href="#">
                      <div className="available-on-item">
                        <FontAwesomeIcon className="fontAI" icon={faWindows} />
                        <div className="available-on-inner">
                          <h2> WINDOWS</h2>
                        </div>
                      </div>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Download;
