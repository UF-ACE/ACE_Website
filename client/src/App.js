import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./features/NavigationBar.js";
import HomePage from "./pages/Home/HomePage.js";
import AboutPage from "./pages/About/AboutPage.js";
import Footer from "./features/Footer/Footer.js";
import LearnPage from "./pages/Learn/LearnPage.js";
import LoginPage from "./pages/Login/LoginPage.js"
import AdminPage from "./pages/AdminDashboard/AdminPage.js"
import AnnouncementPage from './pages/Announcement/AnnouncementPage'
import { ParallaxProvider } from 'react-scroll-parallax';
import { AuthProvider } from './contexts/AuthContext';
import RegisterPage from "./pages/RegisterPage/RegisterPage.js";

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#0cd026',
    },
    background: {
      default: 'rgba(49,49,222,0.76)',
      paper: '#de601a',
    },
    info: {
      main: '#2196f3',
    },
  }
});


function App() {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <div className="app">
              <NavigationBar />
              <div className="content">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/About" component={AboutPage} />
                  <Route path="/Learn" component={LearnPage} />
                  <Route path="/Login" component={LoginPage} />
                  <Route path="/Announcements" component={AnnouncementPage} />
                  <Route path="/AdminDashboard" component={AdminPage} />
                  <Route path="/Register" component={RegisterPage} />
=                </Switch>
              </div>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
