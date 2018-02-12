pragma solidity ^0.4.4;

contract SampleContract {
    uint public totalContributions;

    event Contribution(uint minimum);

    function contribute(uint minimum) public payable {
        totalContributions += minimum;
        Contribution(minimum);
    }

    function getTotalContribution() public view returns (uint) {
        return totalContributions;
    }
}