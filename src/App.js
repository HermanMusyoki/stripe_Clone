import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Submenu from "../components/Submenu";
import "./styles.css";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
