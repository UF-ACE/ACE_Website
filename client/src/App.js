import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/About" element={<AboutPage />} />
                  <Route path="/Learn" element={<LearnPage />} />
                  <Route path="/Login" element={<LoginPage />} />
                  <Route path="/Announcements" element={<AnnouncementPage />} />
                  <Route path="/AdminDashboard" element={<AdminPage />} />
                  <Route path="/Register" element={<RegisterPage />} />
                </Routes>
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
