import React from 'react';
const Votinginfo = () => {
return (
    <section className="px-8 py-20 text-white max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-cyan-400 mb-4">DAO Voting System</h1>
    <p className="text-gray-300 text-lg mb-4">
        Vote anonymously on projects, standards, and company reports. Your voting power depends on how many VERD tokens you stake.      </p>
    <ul className="list-disc pl-6 text-gray-400 space-y-2">
        <li>Vote on eco-project approval & CGT minting</li>
        <li>Vote on new or revised quality standards</li>
        <li>Burn CRTs via community proposals</li>
    </ul>
    </section>
);
};

export default Votinginfo;
