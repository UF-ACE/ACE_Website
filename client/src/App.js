import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./features/NavigationBar";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import Footer from "./features/Footer/Footer.js";
import LearnPage from "./pages/Learn/LearnPage.js";
import AdminPage from "./pages/AdminDashboard/AdminPage.js";

function App() {
  let adminDashboardFilePath = "/" + process.env.REACT_APP_PASSWORD;
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
            <Route path={adminDashboardFilePath}>
              <AdminPage />
            </Route>
          </Switch>
        </div>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
