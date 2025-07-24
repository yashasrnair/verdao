// pages/Voting.tsx
import React, { useState } from "react";

const Votingwork = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const proposals = [
    {
      id: "p1",
      title: "🌳 Approve Reforestation Project - Amazon Region",
      description: "Plant 100,000 trees backed by satellite data and verified local NGOs.",
    },
    {
      id: "p2",
      title: "📊 Adjust Carbon Token Market Price",
      description: "Proposal to increase CGT price to $15 to match eco-project demand.",
    },
    {
      id: "p3",
      title: "🔒 Lock Voting Period to 7 Days",
      description: "Add a mandatory 7-day window for vote analysis before execution.",
    },
  ];

  const handleVote = () => {
    if (!selected) return;
    setSubmitted(true);
    // TODO: Add vote logic + token reward minting
    console.log("Vote submitted for:", selected);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#111827] text-white px-6 py-12">
      <h1 className="text-3xl font-bold text-green-400 mb-8">🗳️ DAO Voting Portal</h1>

      {submitted ? (
        <div className="bg-[#1f2937] p-8 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-green-300 mb-2">✅ Vote Submitted!</h2>
          <p className="text-sm text-gray-400">Thanks for shaping VerdAO's future 💚</p>
        </div>
      ) : (
        <form className="space-y-6 max-w-3xl">
          {proposals.map((p) => (
            <div
              key={p.id}
              className={`p-6 border rounded-xl cursor-pointer transition-all ${
                selected === p.id
                  ? "border-green-400 bg-green-800/10"
                  : "border-gray-600 hover:border-green-400"
              }`}
              onClick={() => setSelected(p.id)}
            >
              <h2 className="font-semibold text-lg mb-1">{p.title}</h2>
              <p className="text-sm text-gray-300">{p.description}</p>
            </div>
          ))}

          <button
            type="button"
            className={`px-6 py-3 rounded-lg text-black font-bold bg-green-400 hover:bg-green-500 transition ${
              !selected ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleVote}
            disabled={!selected}
          >
            Submit Vote
          </button>
        </form>
      )}
    </div>
  );
};

export default Votingwork;
