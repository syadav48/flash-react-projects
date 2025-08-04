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
import Carousel from './utils/Image-Carousel';
import ImageGallery from './utils/Image-Carousel';
import HotelBooking from './utils/Hotel-Booking';
import RenderCounter from './hooks/useref/rendercount';
import Refer from './hooks/useref/ref';
import TimerComponent from './hooks/useref/stoptimer';
import ThemeGiver from './context';
import Component from './components/great-frontend/BooleanComp';
import Throttle from './jsfunction/throttle/throttleBasic';
import ScrollDetector from './jsfunction/throttle/throttleScroll';
import ItemList from './event-delegation';
import NestedDelegation from './event-delegation/nestedEventDel';
import BrowserEvents from './browser-events';
import Events from './events';
import Counter from './practice';
import ToDoList from './utils/ToDo-List';
import DevCounter from './components/devio/Counter';
import DevIo from './components/devio';
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
          <Route path="/image-carousel" element={<ImageGallery />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/ref" element={<Refer />} />
          <Route path="/render-counter" element={<RenderCounter />} />
          <Route path="/timer" element={<TimerComponent />} />
          <Route path="/usetheme" element={<ThemeGiver />} />
          <Route path="/usebool" element={<Component />} />
          <Route path="/throttle" element={<Throttle />} />
          <Route path="/scroll-throttle" element={<ScrollDetector />} />
          <Route path="/event-delegation" element={<ItemList />} />
          <Route path="/event-delegation-nested" element={<NestedDelegation />} />
          <Route path="/browser-events" element={<BrowserEvents />} />
          <Route path="/events" element={<Events />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/to-do-lists" element={<ToDoList />} />
          <Route path="/devio" element={<DevIo />} />

          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;