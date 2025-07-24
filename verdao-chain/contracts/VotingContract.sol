// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract VotingContract {
    struct Proposal {
        string description;
        uint256 votes;
        bool exists;
    }

    IERC20 public governanceToken; // CGT
    mapping(uint256 => Proposal) public proposals;
    mapping(address => mapping(uint256 => bool)) public hasVoted;
    uint256 public proposalCount;

    constructor(IERC20 _governanceToken) {
        governanceToken = _governanceToken;
    }

    function createProposal(string calldata desc) external {
        proposalCount++;
        proposals[proposalCount] = Proposal(desc, 0, true);
    }

    function vote(uint256 proposalId, uint256 amount) external {
        require(proposals[proposalId].exists, "Proposal not found");
        require(!hasVoted[msg.sender][proposalId], "Already voted");
        require(governanceToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        proposals[proposalId].votes += amount;
        hasVoted[msg.sender][proposalId] = true;
    }

    function getVotes(uint256 proposalId) external view returns (uint256) {
        return proposals[proposalId].votes;
    }
}
