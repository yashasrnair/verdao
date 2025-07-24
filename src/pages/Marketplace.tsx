import React, { useState } from "react";

const mockProjects = [
  {
    id: "1",
    name: "🌳 GreenForest: Amazon Reforestation",
    price: 12.5,
    impact: "1000 trees, 5000 tons CO₂ offset",
  },
  {
    id: "2",
    name: "☀️ SolarSave: Rural Solar Grid",
    price: 9.8,
    impact: "30 villages powered, 2000 tons CO₂ offset",
  },
  {
    id: "3",
    name: "🧼 CleanOcean: Plastic Cleanup",
    price: 14.0,
    impact: "200 tons plastic removed from Indian Ocean",
  },
];

export default function Marketplace() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleBuy = (projectId: string) => {
    console.log("Purchased CGT from:", projectId);
    alert("🛒 Success! Your CGT tokens have been minted!");
    setSelected(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#111827] text-white px-6 py-16">
      <h1 className="text-3xl font-bold text-green-400 mb-6">🛒 CGT Marketplace</h1>
      <p className="text-sm text-gray-300 mb-12">
        Buy Carbon Green Tokens (CGT) from verified eco-projects to offset your emissions 🌿
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <div
            key={project.id}
            className={`border rounded-xl p-6 transition-all cursor-pointer ${
              selected === project.id
                ? "border-green-500 bg-green-900/10"
                : "border-gray-700 hover:border-green-500"
            }`}
            onClick={() => setSelected(project.id)}
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-400 text-sm mb-2">{project.impact}</p>
            <p className="text-green-300 font-bold mb-4">${project.price} / CGT</p>

            <button
              onClick={() => handleBuy(project.id)}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold px-4 py-2 rounded-md transition"
            >
              Buy CGT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
