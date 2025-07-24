import React, { useEffect, useState } from "react";
import { getContracts } from "../utils/contracts";
import { connectWallet } from "../utils/wallet";

const Dashboard: React.FC = () => {
  const [wallet, setWallet] = useState<string>("");
  const [cgtBalance, setCgtBalance] = useState<number>(0);
  const [crtDebt, setCrtDebt] = useState<number>(0);
  const [stakedVerd, setStakedVerd] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const account = await connectWallet();
        setWallet(account.address);

        const { cgtToken, crtToken, stakingContract } = await getContracts();

        const [cgt, crt, staked] = await Promise.all([
          cgtToken.balanceOf(account),
          crtToken.balanceOf(account),
          stakingContract.stakedBalanceOf(account),
        ]);

        setCgtBalance(Number(cgt));
        setCrtDebt(Number(crt));
        setStakedVerd(Number(staked));
      } catch (err) {
        console.error("💥 Error loading dashboard data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#111827] text-white px-6 py-16">
      <h1 className="text-3xl font-bold text-green-400 mb-6">📊 Your Dashboard</h1>
      <p className="text-sm text-gray-300 mb-10">
        Your personal carbon credits summary, voting stats & staking status 🌍
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg border border-green-500">
          <p className="text-gray-400 text-sm mb-1">Connected Wallet</p>
          <p className="text-white font-semibold text-lg">{wallet}</p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg">
          <p className="text-gray-400 text-sm mb-1">CGT Balance</p>
          <p className="text-green-300 text-2xl font-bold">{cgtBalance} CGT</p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg">
          <p className="text-gray-400 text-sm mb-1">CRT Debt</p>
          <p className="text-red-400 text-2xl font-bold">{crtDebt} CRT</p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg">
          <p className="text-gray-400 text-sm mb-1">Staked VERD</p>
          <p className="text-blue-400 text-2xl font-bold">{stakedVerd} VERD</p>
          <p className="text-gray-400 text-xs mt-1">APR: 14.5%</p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg">
          <p className="text-gray-400 text-sm mb-1">Voting Power</p>
          <p className="text-yellow-400 text-2xl font-bold">63 VP</p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg">
          <p className="text-gray-400 text-sm mb-1">Voting Streak</p>
          <p className="text-purple-400 text-2xl font-bold">5 Days 🔥</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
