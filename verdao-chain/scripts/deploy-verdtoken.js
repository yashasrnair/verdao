const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying VERDToken with account:", deployer.address);

  const verdToken = await ethers.deployContract("VERDToken", [
    deployer.address,
  ]);
  await verdToken.waitForDeployment();

  console.log("VERDToken deployed to:", verdToken.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
