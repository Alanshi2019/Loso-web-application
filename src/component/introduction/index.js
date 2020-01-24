import React, { Component, Fragment } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Spring } from "react-spring/renderprops";
import "./style.css";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <Fragment>
        <header className="header" id="Top">
          <div className="header-overlay">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="logo text-center">
                    <Image src="./images/logo.png" />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={8}>
                  <div className="header-text">
                    <h1>A clean and modern looking reponsive website</h1>
                    <p>Built with great love</p>
                  </div>
                  <Spring
                    from={{ opacity: 0, marginLeft: -500 }}
                    to={{ opacity: 1, marginLeft: 0 }}
                    delay="400"
                  >
                    {props => (
                      <div className="header-btns" style={props}>
                        <Button variant="download outline-primary" href="#">
                          Download
                        </Button>
                        <Button variant="tour outline-secondary" href="#">
                          Take a tour
                          <span>
                            <FontAwesomeIcon id="ad" icon={faAngleDown} />
                          </span>
                        </Button>
                      </div>
                    )}
                  </Spring>
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                  <div className="header-iphone">
                    <Image src="./images/iphone-header.png" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Introduction;
