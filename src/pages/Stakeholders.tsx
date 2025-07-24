import React from 'react';

const Stakeholders = () => {
  return (
    <section className="px-8 py-20 text-white max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-green-400 mb-4">Stakeholders</h1>
      <p className="text-gray-300 text-lg mb-4">
        Stakeholders in VerdAO include NGOs, eco-projects, corporations, environmentalists, and the community at large. Each plays a role in defining, verifying, or adhering to carbon credit standards.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>🌿 NGOs & Eco Projects: Earn and sell CGTs</li>
        <li>🏢 Corporates: Purchase CGTs to burn CRTs</li>
        <li>👥 Users: Stake, vote, and influence decisions</li>
        <li>🤝 Platform: Connects, verifies, and governs</li>
      </ul>
    </section>
  );
};

export default Stakeholders;
