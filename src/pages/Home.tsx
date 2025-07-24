// pages/Home.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import PlatformFeatures from '../components/PlatformFeatures';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PlatformFeatures />
      <CallToAction />
    </>
  );
};

export default Home;
