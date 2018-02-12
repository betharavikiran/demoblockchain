var SampleContract = artifacts.require("./SampleContract.sol");

module.exports = function(deployer) {
  deployer.deploy(SampleContract);
};



// ln -s ~/training/Ethereum/demoblockchain/build ~/training/Ethereum/demoblockchain/webapp/contacts