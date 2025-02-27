import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Components/Navbar/Home/Home';
import Contact from './Components/Navbar/Home/ContactUs/Contact';
import UnderMaintenans from './Components/UnderMaintenans/UnderMaintenans';


function App() {
  return (
    <>
    <Navbar/>
      <Home/>
      <Contact/>
      <UnderMaintenans/>
    </>
  );
}

export default App;
