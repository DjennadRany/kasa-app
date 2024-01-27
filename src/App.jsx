// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AccommodationDetails from './pages/AccommodationDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation/:id" element={<AccommodationDetails />} />
          <Route path="/accommodation/*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
