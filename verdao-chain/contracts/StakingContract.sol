// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakingContract is Ownable {
    IERC20 public stakeToken; // CRT
    IERC20 public rewardToken; // VERD

    mapping(address => uint256) public balances;

    constructor(
        IERC20 _stakeToken,
        IERC20 _rewardToken,
        address initialOwner
    ) Ownable(initialOwner) {
        stakeToken = _stakeToken;
        rewardToken = _rewardToken;
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount must be > 0");
        stakeToken.transferFrom(msg.sender, address(this), amount);
        balances[msg.sender] += amount;
    }

    function unstake(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough balance");
        balances[msg.sender] -= amount;
        stakeToken.transfer(msg.sender, amount);
    }

    function reward(address user, uint256 amount) external onlyOwner {
        rewardToken.transfer(user, amount);
    }
}
