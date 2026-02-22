import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Security from "./components/Security";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// 👉 Pages
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Register Page */}
      <Route path="/register" element={<Register />} />

      {/* Sign In Page */}
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;