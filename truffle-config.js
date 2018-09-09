var HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = '';
const token = '';


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/" + token)
      },
      network_id: '4'
    }
  }
};
