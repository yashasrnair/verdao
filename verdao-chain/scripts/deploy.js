const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying voting contract with account:", deployer.address);

  const governanceTokenAddress = "0xA69291Cd2061bD5302375678A731EDbCB793a178"; // Your CGT address

  const VotingContract = await ethers.getContractFactory("VotingContract");
  const voting = await VotingContract.deploy(governanceTokenAddress);

  // 🔥 Wait for contract to be mined (Ethers v6 way)
  const receipt = await voting.waitForDeployment();

  console.log("VotingContract deployed to:", await voting.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
