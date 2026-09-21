import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Collection from "./components/Collection";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import ClassicalDance from "./components/ClassicalDance";
import WesternDance from "./components/WesternDance";
import TraditionalFolk from "./components/TraditionalFolk";
import FancyDress from "./components/FancyDress";
import StageEvents from "./components/StageEvents";

// ================= HOME PAGE =================

function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <WhyChooseUs />
      <About />
      <Events />
      <Contact />
    
    </>
  );
}

// ================= APP =================

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/classical-dance" element={<ClassicalDance />} />
        <Route path="/western-dance" element={<WesternDance />} />
        <Route path="/traditional-folk" element={<TraditionalFolk />} />
        <Route path="/fancy-dress" element={<FancyDress />} />
        <Route path="/stage-events" element={<StageEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;