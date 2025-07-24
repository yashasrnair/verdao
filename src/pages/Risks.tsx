import React from 'react';

const Risks = () => {
  return (
    <section className="px-8 py-20 text-white max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-red-400 mb-4">Risks & Mitigation</h1>
      <p className="text-gray-300 text-lg mb-4">
        VerdAO addresses key risks like greenwashing, data manipulation, and centralized validation through decentralized transparency.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Anonymous, on-chain voting prevents bias</li>
        <li>Reputation-based proposal system</li>
        <li>DAO-insurance for high-impact cleanups</li>
      </ul>
    </section>
  );
};

export default Risks;
