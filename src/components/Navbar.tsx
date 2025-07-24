import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connectWallet } from '../utils/wallet';

const Navbar: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    try {
      const { address } = await connectWallet();
      setWalletAddress(address);
    } catch (err) {
      console.error("⚠️ Wallet connection failed:",err);
      alert("⚠️ Failed to connect wallet. Check MetaMask and network.");
    }
  };

  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex justify-between items-center shadow-md">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <div>
          <span className="text-green-400 font-bold">VerdAO</span>
          <p className="text-xs text-gray-400">Carbon Credit Platform</p>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-green-400 transition-all duration-200">Home</Link>
        <Link to="/about" className="hover:text-green-400 transition-all duration-200">About</Link>
        <Link to="/stakeholders" className="hover:text-green-400 transition-all duration-200">Stakeholders</Link>
        <Link to="/voting" className="hover:text-green-400 transition-all duration-200">Voting</Link>
        <Link to="/standards" className="hover:text-green-400 transition-all duration-200">Standards</Link>
        <Link to="/risks" className="hover:text-green-400 transition-all duration-200">Risks</Link>
        <Link to="/marketplace" className="hover:text-green-400 transition-all duration-200">Marketplace</Link>
        <Link to="/contact" className="hover:text-green-400 transition-all duration-200">Contact</Link>
        <Link to="/dashboard" className="hover:text-green-400 transition-all duration-200">Dashboard</Link>
        <Link to="/staking" className="hover:text-green-400 transition-all duration-200">Staking</Link>
      </div>

      {/* Right: Connect Wallet */}
      <button
        onClick={handleConnectWallet}
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-300 hover:to-blue-400 text-black font-bold px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
      >
        {walletAddress ? `🟢 ${walletAddress.slice(0, 6)}...` : 'Connect Wallet'}
      </button>
    </nav>
  );
};

export default Navbar;
