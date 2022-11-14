import React from "react";
import PaysManager from "./container/pays/PaysManager";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./container/Navbar";
import UnPays from "./components/UnPays";

function App() {
  return (
    <Router>

    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home />} />

      <Route path="/PM" element={<PaysManager/>} /> 
      <Route path="/PM/:id"  element={<UnPays />} />

    </Routes>
   </Router>
    

  )
}

export default App;
