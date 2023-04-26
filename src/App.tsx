import { useState } from "react";
import "./App.css";

// Components import
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Education />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
