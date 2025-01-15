import React from 'react';
import { useLocation, Routes, Route, useNavigate } from 'react-router-dom';

import './App.css'; 

// Components
import Header from './components/Header';
import WorkPage from './components/WorkPage';
import BlogPage from './components/BlogPage';
import TravelPage from './components/TravelPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <WorkPage />
        <BlogPage />
        <TravelPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
