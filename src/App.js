import React from "react";
import Main from "./components/Main";
import Login from "./components/Login";
import Footer from "./components/Footer"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./components/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App;
