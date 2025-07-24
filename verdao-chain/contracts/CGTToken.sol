// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CGTToken is ERC20, Ownable {
    constructor(address initialOwner) ERC20("Carbon Governance Token", "CGT") Ownable(initialOwner) {
        _mint(initialOwner, 500_000 * 10 ** decimals());
    }
}
