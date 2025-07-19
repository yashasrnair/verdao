import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import PlatformFeatures from './components/PlatformFeatures';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PlatformFeatures />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
