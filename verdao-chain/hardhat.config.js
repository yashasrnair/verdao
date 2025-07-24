require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    testnet: {
      url: "https://bsc-testnet-rpc.publicnode.com/", // Use your actual testnet RPC
      chainId: 97, // Replace with your testnet's chainId if different
      accounts: [
        "0xbeb19eea446d452f6d49421d80ba84d8dd17e12cc169f92df786b24fff010e70",
      ], // NEVER commit this to GitHub!
    },
  },
};
