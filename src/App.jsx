import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Login from "../../Pages/Login";
import Nav from "../../Components/Nav";
import Notfound from "../../Pages/Notfound";
import Userpage from "../../Pages/Userpage";
// import Nav from '../../Components/Nav';

const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Navigate to='/'/>}/>
        <Route path="/about/:user" element={<Userpage/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </>
  );
};

export default App;
