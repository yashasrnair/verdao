import React from 'react';

const Standards = () => {
  return (
    <section className="px-8 py-20 text-white max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-green-400 mb-4">Quality Standards</h1>
      <p className="text-gray-300 text-lg">
        The DAO defines standards that ensure green projects are genuine. These standards are voted on by VERD holders and help filter out greenwashing attempts.
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
        <li>Impact Verification Process</li>
        <li>Proof-of-Work (trees, cleanups, etc.)</li>
        <li>DAO-approved validation checklist</li>
        <li>Monthly audits & performance reports</li>
      </ul>
    </section>
  );
};

export default Standards;
