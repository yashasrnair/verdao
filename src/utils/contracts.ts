import { ethers } from "ethers";
import VERD_ABI from "../abis/VERDToken.json";
import CRT_ABI from "../abis/CRTToken.json";
import CGT_ABI from "../abis/CGTToken.json";
import STAKE_ABI from "../abis/StakingContract.json";
import {
  VERDTokenAddress,
  CRTTokenAddress,
  CGTTokenAddress,
  StakingContractAddress,
} from "../constants/contractAddresses";

export const getContracts = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const verdToken = new ethers.Contract(VERDTokenAddress, VERD_ABI.abi, signer);
  const crtToken = new ethers.Contract(CRTTokenAddress, CRT_ABI.abi, signer);
  const cgtToken = new ethers.Contract(CGTTokenAddress, CGT_ABI.abi, signer);
  const stakingContract = new ethers.Contract(
    StakingContractAddress,
    STAKE_ABI.abi,
    signer
  );

  return { verdToken, crtToken, cgtToken, stakingContract };
};
