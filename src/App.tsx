import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import HomePage from "./components/home/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";


const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
