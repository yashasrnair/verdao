import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutPage from './pages/aboutpage';
import Stakeholders from './pages/Stakeholders';
import Standards from './pages/Standards';
import Risks from './pages/Risks';
import Votinginfo from './pages/Votinginfo';
import Votingwork from './pages/Votingwork';
import Contact from './pages/Contact';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';



function App() {
  return (
    <Router>
      <div className="bg-[#0f0f0f] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stakeholders" element={<Stakeholders />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/votinginfo" element={<Votinginfo />} />
          <Route path="/voting" element={<Votingwork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staking" element={<Staking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
