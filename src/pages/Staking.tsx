import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getContracts } from "../utils/contracts";
import { StakingContractAddress } from "../constants/contractAddresses";

const Staking = () => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [stakedBalance, setStakedBalance] = useState("0");
  const [verdBalance, setVerdBalance] = useState("0");
  const [walletAddress, setWalletAddress] = useState("");

  const fetchData = async () => {
    try {
      const { verdToken, stakingContract } = await getContracts();
      const provider = new ethers.BrowserProvider(window.ethereum as any);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);

      const userStake = await stakingContract.balances(address);
      const verd = await verdToken.balanceOf(address);

      setStakedBalance(ethers.formatEther(userStake));
      setVerdBalance(ethers.formatEther(verd));
    } catch (err) {
      console.error("Error fetching balances:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = async () => {
    try {
      if (!stakeAmount || Number(stakeAmount) <= 0) {
        return alert("⚠️ Please enter a valid amount to approve.");
      }

      const { crtToken } = await getContracts(); // 🟢 CRT is the stake token
      const tx = await crtToken.approve(
        StakingContractAddress,
        ethers.parseEther(stakeAmount)
      );
      await tx.wait();
      alert("✅ CRT approved successfully!");
    } catch (err) {
      console.error("Approve failed:", err);
      alert("❌ Approve failed. Try again.");
    }
  };

  const handleStake = async () => {
    try {
      if (!stakeAmount || Number(stakeAmount) <= 0) {
        return alert("⚠️ Enter a valid amount to stake.");
      }

      const { crtToken, stakingContract } = await getContracts();
      const provider = new ethers.BrowserProvider(window.ethereum as any);
      const signer = await provider.getSigner();
      const wallet = await signer.getAddress();

      const amountToStake = ethers.parseEther(stakeAmount);
      const allowance = await crtToken.allowance(wallet, StakingContractAddress);

      if (allowance < amountToStake) {
        return alert("❌ Not enough CRT approved. Click 'Approve CRT' first.");
      }

      const tx = await stakingContract.stake(amountToStake);
      await tx.wait();

      alert("✅ Successfully staked CRT!");
      setStakeAmount("");
      fetchData();
    } catch (err) {
      console.error("Staking failed:", err);
      alert("⚠️ Staking failed. Check MetaMask and contract.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#111827] text-white px-6 py-16">
      <h1 className="text-3xl font-bold text-green-400 mb-6">🔥 Stake CRT</h1>
      <p className="text-sm text-gray-300 mb-10">
        Lock CRT tokens and earn passive VERD rewards while contributing to decentralized climate impact ♻️
      </p>

      <div className="bg-black/30 p-6 rounded-xl border border-green-500 shadow-lg w-full max-w-md space-y-4">
        <div>
          <label className="block mb-2 text-sm">Amount to Stake (CRT)</label>
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleApprove}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold"
          >
            Approve CRT
          </button>
          <button
            onClick={handleStake}
            className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold"
          >
            Stake Now
          </button>
        </div>

        <hr className="my-4 border-gray-600" />

        <div className="space-y-2 text-sm">
          <p>💼 Connected Wallet: {walletAddress}</p>
          <p>📊 Your Staked: {stakedBalance} CRT</p>
          <p>💰 Your VERD Rewards: {verdBalance}</p>
        </div>
      </div>
    </div>
  );
};

export default Staking;
