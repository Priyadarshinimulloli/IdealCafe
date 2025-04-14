import React from 'react';
import NavigationBar from './components/NavigationBar';
import Menupage from './components/Menupage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
// import Location from './components/LocationP';
// import Home from "./components/Home"
import Contactus from './components/Contactus';
import 'leaflet/dist/leaflet.css';
// import LocationPage from './components/LocationPage';
import LocationPage from "./components/LocationPage";

export default function App() {
  return (
    
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menupage />} />
        
        
        <Route path="/location" element={<LocationPage />} />
        <Route path="/Contact Us" element={<Contactus/>}/>
      </Routes>
    </Router>
  );

}

