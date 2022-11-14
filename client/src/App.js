import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./features/NavigationBar.js";
import HomePage from "./pages/Home/HomePage-Rev.js";
import AboutPage from "./pages/About/AboutPage.js";
import Footer from "./features/Footer/Footer.js";
import LearnPage from "./pages/Learn/LearnPage.js";
import LoginPage from "./pages/Login/LoginPage.js"
import AnnouncementPage from './pages/Announcement/AnnouncementPage'
import { ParallaxProvider } from 'react-scroll-parallax';

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
        <Router>
          <NavigationBar />
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
              <Route path="/Announcements">
                <AnnouncementPage />
              </Route>
            </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
