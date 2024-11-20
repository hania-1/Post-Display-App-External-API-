'use client'

import React from "react";
import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero";
import Post from "@/components/Post";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      {/* The Navbar */}
      <Navbar />
      
      {/* The Hero section */}
      {/* <Hero />
      <Post /> */}
      <div id="home"><Hero /></div>
        <div id="post"><Post /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
      {/* <About />
      <Contact /> */}
    </>
  );
};

export default Home;
