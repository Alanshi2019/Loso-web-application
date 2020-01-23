import React, { Component, Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBullhorn, faFlag } from "@fortawesome/free-solid-svg-icons";
import { Spring } from "react-spring/renderprops";
import "./style.css";
class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 388 && !this.state.showAbout) {
        this.setState({ showAbout: true });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    const content = (
      <div className="choose-us-wrapper">
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <Spring
                from={{ opacity: 0, marginLeft: -300 }}
                to={{ opacity: 1, marginLeft: 0 }}
                config={{ duration: 1000 }}
              >
                {props => (
                  <div className="about-iphone" style={props}>
                    <Image src="./images/about-iphone.png" alt="iphone" />
                  </div>
                )}
              </Spring>
            </Col>
            <Col lg={6} md={12}>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay="1000"
                config={{ duration: 2000 }}
              >
                {props => (
                  <div className="choose-us-title" style={props}>
                    <h2>Why Choose Us?</h2>
                    <p>
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Quisque lacus dui,
                      interdum sit amet varius.
                    </p>
                  </div>
                )}
              </Spring>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay="2000"
                config={{ duration: 1000 }}
              >
                {props => (
                  <div className="choose-us-des" style={props}>
                    <div className="choose-us-item">
                      <div>
                        <FontAwesomeIcon className="cu-icon" icon={faBolt} />
                      </div>
                      <h3>QUISQUE LACUS DUI</h3>
                      <p>
                        Lipsum Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Quisque lacus
                        dui, interdum sit amet varius a, cursus sit amet sapien.
                        Donec eu placerat nisi.
                      </p>
                    </div>
                    <div className="choose-us-item">
                      <div>
                        <FontAwesomeIcon
                          className="cu-icon"
                          icon={faBullhorn}
                        />
                      </div>
                      <h3>DONEC EU PLACERAT NISI</h3>
                      <p>
                        Diso Lipsum Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Quisque lacus
                        dui, interdum sit amet varius a, cursus sit amet sapien.
                        Donec eu placerat nisi.
                      </p>
                    </div>
                    <div className="choose-us-item">
                      <div>
                        <FontAwesomeIcon className="cu-icon" icon={faFlag} />
                      </div>
                      <h3>PERSPICIATIS UNDE OMNIS</h3>
                      <p>
                        Sed ut perspiciatis Cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est
                        laborum.unde omnis iste natus error sit.
                      </p>
                    </div>
                  </div>
                )}
              </Spring>
            </Col>
          </Row>
        </Container>
      </div>
    );

    return (
      <Fragment>
        <Container className="screens">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <div className="section-title">
                <h2>About us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent rhoncus ultricies nibh, vitae sodales purus. Aenean
                  volutpat ullamcorper cursus. Duis tristique sit amet augue ac
                  vestibulum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        {this.state.showAbout ? content : null}
      </Fragment>
    );
  }
}

export default Aboutus;
