import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import HomePage from "./components/home/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import CourseDetail from "./components/course/CourseDetail";


const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:id" element={<CourseDetail />} /> {/* Route động */}
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
