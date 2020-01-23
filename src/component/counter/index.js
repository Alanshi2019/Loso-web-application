import React, { Component, Fragment } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudDownloadAlt,
  faGift,
  faCheck,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 4765 && !this.state.showCounter) {
        this.setState({ showCounter: true });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <Fragment>
        <section className="counter">
          <div className="counter-overlay">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="counter-item">
                    <div>
                      <FontAwesomeIcon
                        className="fontAwesomeIcon"
                        icon={faCloudDownloadAlt}
                      />
                    </div>
                    <h2>
                      <span className="counter-num">1588</span>
                      <span>+</span>
                    </h2>
                    )}
                    <p>Downloads</p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="counter-item">
                    <div>
                      <FontAwesomeIcon
                        className="fontAwesomeIcon"
                        icon={faGift}
                      />
                    </div>
                    <h2>
                      <span className="counter-num"> 3500 </span>
                      <span>+</span>
                    </h2>
                    <p>Awards</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="counter-item">
                    <div>
                      <FontAwesomeIcon
                        className="fontAwesomeIcon"
                        icon={faHeart}
                      />
                    </div>
                    <h2>
                      <span className="counter-num"> 199 </span>
                      <span>+</span>
                    </h2>
                    <p>Likes</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="counter-item">
                    <div>
                      <FontAwesomeIcon
                        className="fontAwesomeIcon"
                        icon={faCheck}
                      />
                    </div>
                    <h2>
                      <span className="counter-num"> 1066 </span>
                      <span>+</span>
                    </h2>
                    <p>Recomended</p>
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

export default Counter;
