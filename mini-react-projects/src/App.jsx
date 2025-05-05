import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import Projects from './components/projects';
import Footer from './components/footer';
import InfiniteScroll from './utils/Infinite-Scroll';

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
          
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;