import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./features/NavigationBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// import ProjectsPage from './pages/ProjectsPage';
import ContactPage from "./pages/ContactPage";
import Footer from "./features/Footer.js";
import LearnPage from "./pages/LearnPage.js";
import AddOfficersPage from "./pages/AddOfficersPage.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AddLearnPage from "./pages/AddLearnPage";

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
            <Route path="/Contact">
              <ContactPage />
            </Route>
            <Route path="/Admin">
              <AddOfficersPage />
            </Route>
            <Route path="/AdminLearn">
              <AddLearnPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
