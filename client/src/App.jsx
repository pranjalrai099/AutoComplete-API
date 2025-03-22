import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import App1 from './components/V1found';
import App2 from './components/V2found';
import App3 from './components/V3found';

export default function App() {
  return (
    <Router> 
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/v1" element={<App1 />} />
          <Route path="/v2" element={<App2 />} />
          <Route path="/v3" element={<App3 />} />
        </Routes>
      </div>
    </Router>
  );
}
