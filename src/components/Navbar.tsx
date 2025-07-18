import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex justify-between items-center shadow-md">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <div>
          <span className="text-green-400 font-bold">DeSoc DAO</span>
          <p className="text-xs text-gray-400">Carbon Credit Platform</p>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        {['Home', 'About', 'Stakeholders', 'Voting', 'Standards', 'Risks', 'Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-green-400 transition-all duration-200">
            {link}
          </a>
        ))}
      </div>

      {/* Right: Connect Wallet */}
      <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-300 hover:to-blue-400 text-black font-bold px-4 py-2 rounded-lg shadow-lg transition-all duration-300">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
