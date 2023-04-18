import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/work" element={<Work/>} />

    </Routes>
    </Router>
  )
}

export default App
