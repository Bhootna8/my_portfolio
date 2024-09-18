import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Projects } from "./pages";
import { Footer, Navbar } from "./components";



function App() {
  return (
    <main className=" bg-slate-300/20 ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
