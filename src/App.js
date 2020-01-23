import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Header from "./common/header";
import Footer from "./common/footer";
import Introduction from "./component/introduction";
import Aboutus from "./component/aboutus";
import Testimonials from "./component/testimonials";
import Features from "./component/features";
import Purchase from "./component/purchase";
import Screens from "./component/screens";
import Counter from "./component/counter";
import Download from "./component/download";
import Contact from "./component/contact";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Introduction />
        <Aboutus />
        <Testimonials />
        <Features />
        <Purchase />
        <Screens />
        <Counter />
        <Download />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
