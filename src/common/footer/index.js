import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

class Aboutus extends Component {
  handleBackToTop() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    return (
      <Fragment>
        <footer className="footer">
          <Container>
            <Row>
              <Col md={12}>
                <div id="copyright">
                  <p>
                    Copyright &copy; 2020 <a href="#"> - LoSo</a>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="scroll-top" onClick={this.handleBackToTop}>
                  <a href="#HOME" id="scroll-to-top">
                    <FontAwesomeIcon className="FooterIcon" icon={faAngleUp} />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </Fragment>
    );
  }
}

export default Aboutus;
