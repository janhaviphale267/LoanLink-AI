import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Security from "./components/Security";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
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

export default App;