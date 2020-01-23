import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <section className="contact-us" id="CONTACT">
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <div className="section-title">
                  <h2>Contact Us</h2>
                  <p>
                    Nulla blandit sem sed neque pretium mattis. Etiam
                    consectetur eleifend felis porttitor porttitor. Phasellus
                    sit amet augue fringilla, fringilla lectus at, tincidunt
                    ante.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="contact-us-form">
            <Container>
              <Form>
                <Row>
                  <Col md={4}>
                    <Form.Control type="text" id="name" placeholder="Name" />
                    <Form.Control type="email" id="name" placeholder="Email" />
                    <Form.Control type="text" id="name" placeholder="Subject" />
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      as="textarea"
                      id="message"
                      rows="25"
                      cols="10"
                      placeholder="Message Text...."
                    />
                    <Button
                      variant="default"
                      type="submit"
                      className="submit-btn"
                    >
                      SEND
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div>
          <Container>
            <Row>
              <Col md={12}>
                <div className="social-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon className="FIcon" icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon className="FIcon" icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon className="FIcon" icon={faYoutube} />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Contact;
