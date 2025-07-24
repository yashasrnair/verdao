import React from 'react';
import dashboardImage from '../assets/dashboard.png'; // update path if needed

const HeroSection: React.FC = () => {
return (
    <section className="relative bg-[#0f0f0f] text-white py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12 overflow-hidden">
      {/* Left side */}
    <div className="z-10">
        {/* BNB Badge */}
        <div className="inline-block border border-green-500 text-green-400 px-4 py-2 rounded-full mb-6 font-medium text-sm shadow-[0_0_15px_#00ff99] backdrop-blur-md bg-green-400/10">
        ⚡ Built on BNB Chain
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        <span className="block text-white">DECENTRALIZED</span>
        <span className="block text-green-400 drop-shadow-[0_0_15px_#00ff99]">CARBON&nbsp;&nbsp;CREDIT</span>
        <span className="block text-blue-400 drop-shadow-[0_0_15px_#00ccff]">EXCHANGE</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 mt-6 text-lg max-w-lg">
        Join the global DAO revolution. Set quality standards for carbon credits and eliminate greenwashing through transparent blockchain voting.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-10 flex-wrap">
        <button className="bg-green-400 text-black px-6 py-3 rounded-lg font-bold shadow-[0_0_20px_#00ff99] hover:bg-green-300 transition-all">
            🚀 LAUNCH PLATFORM
        </button>
        <button className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2">
            ▶ WATCH DEMO
        </button>
        </div>
    </div>

      {/* Right image */}
    <div className="z-10 flex justify-center md:justify-end">
        <img
        src={dashboardImage}
        alt="Dashboard"
        className="w-[52rem] rounded-xl shadow-[0_0_30px_#00ffcc] border border-green-500"
        />
    </div>

      {/* Background grid lines */}
    <div className="absolute inset-0 bg-[radial-gradient(#00ff9933_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none z-0" />
    </section>
);
};

export default HeroSection;
