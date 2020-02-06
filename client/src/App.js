import React, { Component } from "react";
import Navbar from "../src/Components/Navbar/index.js"
import Footer from "../src/Components/Footer/index.js"
import Home from "./Pages/Home/index.js"
import LiveStream from "./Pages/LiveStream/index.js"
import ContactUs from "./Pages/ContactUs/index.js"
import Tour from "./Pages/Tour/index.js"
import Store from "./Store/Store/index.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
class App extends Component {
  render() {
    return (<div>
      <Navbar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} /> */}
            <Route exact path="/store" component={Store} />
            <Route exact path="/live-stream" component={LiveStream} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/tour" component={Tour} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
    );
  }
}

export default App;
