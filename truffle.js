const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic ="fuel coil enjoy short behave depth road fabric fashion eager ozone nerve";

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/Kh28sdWPaCppYJ3dSMOE")
            },
            network_id: 3,
            gas:4712389,
        }
    }
};
