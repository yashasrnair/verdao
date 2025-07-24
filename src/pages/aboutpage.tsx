// pages/about.tsx

import React from "react";
import PlatformFeatures from "../components/PlatformFeatures";
import SectionHeader from "../components/SectionHeader";
import CallToAction from "../components/CallToAction";
// import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    // <Layout>
      <div className="bg-gradient-to-br from-[#0f172a] to-[#111827] text-white py-16 px-6">
        <SectionHeader
          title="About VerdAO"
          subtitle="VerdAO is a decentralized carbon governance platform that empowers communities to fight greenwashing, set eco-standards, and reward real climate action. Built on transparency, powered by you."
        />

        <div className="mt-16">
          <PlatformFeatures />
        </div>

        <div className="mt-16">
          <CallToAction />
        </div>
      </div>
    // </Layout>
  );
}
