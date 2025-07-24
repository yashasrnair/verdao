// scripts/deploy-all.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  // Deploy VERD Token
  const VERDToken = await ethers.getContractFactory("VERDToken");
  const verd = await VERDToken.deploy(deployer.address);
  await verd.waitForDeployment();
  console.log("VERDToken deployed to:", await verd.getAddress());

  // Deploy CRT Token
  const CRTToken = await ethers.getContractFactory("CRTToken");
  const crt = await CRTToken.deploy(deployer.address);
  await crt.waitForDeployment();
  console.log("CRTToken deployed to:", await crt.getAddress());

  // Deploy CGT Token
  const CGTToken = await ethers.getContractFactory("CGTToken");
  const cgt = await CGTToken.deploy(deployer.address);
  await cgt.waitForDeployment();
  console.log("CGTToken deployed to:", await cgt.getAddress());

  // Deploy Staking Contract
  const StakingContract = await ethers.getContractFactory("StakingContract");
  const staking = await StakingContract.deploy(
    await crt.getAddress(),
    await verd.getAddress(),
    deployer.address
  );
  await staking.waitForDeployment();
  console.log("StakingContract deployed to:", await staking.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
