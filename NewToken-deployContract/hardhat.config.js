require("dotenv").config({ path: __dirname + "/.env" });
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan');


/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     mumbai:{
//       url:process.env.ALCHEMY_TESTNET_RPC_URL,
//       accounts:[process.env.TESTNET_PRIVATE_KEY],
//       chainId: 8001,
//     },
//   },
// };

module.exports = {
  // defaultNetwork: "mumbai",
  // networks: {
  //   hardhat: {
  //     chainId: 1337
  //   },
  //   mumbai: {
  //     url:"https://polygon-mumbai.g.alchemy.com/v2/DRlRMPTQ-WWuDiEmOqp_dIAyTI-ihlzE",
  //    // url: "https://rpc-mumbai.matic.today",
  //     accounts:[process.env.PRIVATE_KEY],
  //   },
    
  // },
  defaultNetwork: "bttc",
  networks: {
    hardhat: {  
      chainId: 1029
    },
    BTTC: {
      url:"https://pre-rpc.bt.io/",
     // url: "https://rpc-mumbai.matic.today",
      accounts:[process.env.PRIVATE_KEY],
    },
    // bttc: {
    //   url: process.env.API_KEY_URL, //Your RPC URL
    //   accounts: [process.env.PRIVATE_KEY], //Your private key
    // },
    
  },
  etherscan: {
    apiKey: "Y3UUT4JPAYID1MSP75GRCU9J7ZW8UDBNA9",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};