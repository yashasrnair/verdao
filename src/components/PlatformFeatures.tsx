// src/components/PlatformFeatures.tsx
import React, { ComponentType } from "react";
import { FaVoteYea, FaEye } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type FeatureType = {
  title: string;
  description: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
  bg: string;
  textColor?: string;
  linkText: string;
  link: string;
  linkColor: string;
};

const features: FeatureType[] = [
  {
    title: "DECENTRALIZED VOTING",
    description:
      "Participate in transparent, blockchain-based voting to establish carbon credit quality standards and governance decisions.",
    linkText: "ACCESS SYSTEM →",
    link: "/voting",
    linkColor: "text-cyan-400",
    bg: "from-cyan-400 to-green-500",
    Icon: FaVoteYea as ComponentType<{ size?: number; className?: string }>,
  },
  {
    title: "QUALITY STANDARDS",
    description:
      "Establish and maintain rigorous quality standards for carbon credits through community-driven consensus mechanisms.",
    linkText: "VIEW STANDARDS →",
    link: "/standards",
    linkColor: "text-green-400",
    bg: "from-cyan-400 to-green-500",
    Icon: BsFillSunFill as ComponentType<{ size?: number; className?: string }>,
  },
  {
    title: "ANTI-GREENWASHING",
    description:
      "Combat greenwashing through transparent verification processes and real-time monitoring of carbon credit authenticity.",
    linkText: "LEARN MORE →",
    link: "/voting",
    linkColor: "text-green-400",
    textColor: "text-yellow-300",
    bg: "from-yellow-400 to-green-400",
    Icon: FaEye as ComponentType<{ size?: number; className?: string }>,
  },
];

// Update PlatformFeatures to use useNavigate for button redirection
function PlatformFeatures() {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            <span className="text-white">PLATFORM </span>
            <span className="text-green-400">FEATURES</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Advanced blockchain technology meets environmental sustainability
            through our cyberpunk DAO platform
          </p>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-green-500 rounded-2xl p-6 shadow-lg hover:shadow-green-500/30 transition-shadow duration-300 flex flex-col"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${feature.bg} mb-4`}
              >
                {React.createElement(feature.Icon, {
                  size: 20,
                  className: "text-black dark:text-zinc-900",
                })}
              </div>
              <h3
                className={`text-lg font-mono font-semibold mb-2 ${
                  feature.textColor || "text-green-400"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>
              <button
                type="button"
                className={`mt-auto inline-block font-semibold ${feature.linkColor} hover:underline bg-transparent border-none p-0 cursor-pointer`}
                onClick={() => navigate(feature.link)}
              >
                {feature.linkText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformFeatures;

// export default function PlatformFeatures() {
//   return (
//     <section className="py-16 px-4 bg-black">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold">
//             <span className="text-white">PLATFORM </span>
//             <span className="text-green-400">FEATURES</span>
//           </h2>
//           <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
//             Advanced blockchain technology meets environmental sustainability
//             through our cyberpunk DAO platform
//           </p>
//         </div>

//         <div className="grid gap-8 mt-12 md:grid-cols-3">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-zinc-900 border border-green-500 rounded-2xl p-6 shadow-lg hover:shadow-green-500/30 transition-shadow duration-300 flex flex-col"
//             >
//               <div
//                 className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${feature.bg} mb-4`}
//               >
//                 {React.createElement(feature.Icon, {
//                   size: 20,
//                   className: "text-black dark:text-zinc-900",
//                 })}
//               </div>
//               <h3
//                 className={`text-lg font-mono font-semibold mb-2 ${
//                   feature.textColor || "text-green-400"
//                 }`}
//               >
//                 {feature.title}
//               </h3>
//               <p className="text-sm text-gray-400 leading-relaxed mb-4">
//                 {feature.description}
//               </p>
//               <button
//                 type="button"
//                 className={`mt-auto inline-block font-semibold ${feature.linkColor} hover:underline bg-transparent border-none p-0 cursor-pointer`}
//               >
//                 {feature.linkText}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
