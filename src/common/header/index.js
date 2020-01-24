import React, { Component, Fragment } from "react";
import { Spring } from "react-spring/renderprops";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "./style.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      const isTop = window.scrollY < 100;
      if (!isTop && !this.state.show) {
        this.setState({ show: true });
      } else {
        if (isTop && this.state.show) {
          this.setState({ show: false });
        }
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  scrollToAnchor = anchorName => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  render() {
    const content = (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <Navbar
            style={props}
            className="navbar-default"
            expand="lg"
            fixed="top"
          >
            <Navbar.Brand className="navbar-brand" href="#home">
              <img src="./images/logo-small.png" alt="home" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link
                  className="Nlink"
                  onClick={() => {
                    this.scrollToAnchor("Top");
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="Nlink"
                  onClick={() => {
                    this.scrollToAnchor("About");
                  }}
                >
                  ABOUT
                </Nav.Link>
                <Nav.Link
                  className="Nlink"
                  onClick={() => {
                    this.scrollToAnchor("Test");
                  }}
                >
                  TESTIMONIAL
                </Nav.Link>
                <Nav.Link
                  className="Nlink"
                  onClick={() => {
                    this.scrollToAnchor("Features");
                  }}
                >
                  FEATURES
                </Nav.Link>
                <Nav.Link
                  className="Nlink"
                  onClick={() => {
                    this.scrollToAnchor("Screens");
                  }}
                >
                  SCREENS
                </Nav.Link>
                <Nav.Link
                  className="Nlink"
                  onClick={() => {
                    this.scrollToAnchor("Download");
                  }}
                >
                  DWONLOAD
                </Nav.Link>
                <Nav.Link
                  className="Nlink"
                  onClick={() => {
                    this.scrollToAnchor("Contact");
                  }}
                >
                  CONTACT
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form inline className="searchBar">
              <div>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
              </div>
            </Form>
          </Navbar>
        )}
      </Spring>
    );

    return <Fragment>{this.state.show ? content : null}</Fragment>;
  }
}

export default Header;
