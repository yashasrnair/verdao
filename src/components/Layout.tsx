// components/Layout.tsx

import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>VerdAO – Decentralized Carbon DAO</title>
        <meta name="description" content="VerdAO – Fight greenwashing with decentralized standards and carbon tokenomics." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-[#0f172a] text-white">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
