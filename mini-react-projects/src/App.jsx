import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import Projects from './components/projects';
import Footer from './components/footer';
import InfiniteScroll from './utils/Infinite-Scroll';
import OtpInput from './utils/Otp-Input';
import PasswordGenerator from './utils/password-generator';
import RestaurantCard from './utils/Resturant-Card';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          {/* Main page route */}
          <Route path="/" element={<Projects />} />
          
          {/* Infinite scrolling route */}
          <Route path="/infinite-scrolling" element={<InfiniteScroll />} />
          <Route path="/otp-input" element={<OtpInput />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/resturant-booking" element={<RestaurantCard />} />

          
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;