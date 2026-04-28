import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarningModal from "./components/WarningModal";

import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import HowItWorks from "./pages/HowItWorks";
import Career from "./pages/Career";
import JobDetail from "./pages/JobDetail";
import Contact from "./pages/Contact";

function App() {
  return (
  <BrowserRouter>

      {/* HEADER */}
      <WarningModal />
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="pt-20">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/career" element={<Career />} />
          <Route path="/:id" element={<JobDetail />} />
          <Route path="/contact-us" element={<Contact />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;