import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./features/NavigationBar.js";
import HomePage from "./pages/Home/HomePage.js";
import AboutPage from "./pages/About/AboutPage.js";
import Footer from "./features/Footer/Footer.js";
import LearnPage from "./pages/Learn/LearnPage.js";
import LoginPage from "./pages/Login/LoginPage.js"

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/About">
              <AboutPage />
            </Route>
            <Route path="/Learn">
              <LearnPage />
            </Route>
            <Route path="/Login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
