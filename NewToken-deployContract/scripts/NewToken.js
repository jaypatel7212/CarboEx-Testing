// Deploy script

const { ethers } = require("hardhat");

async function deploy() {
  const ContractName = await ethers.getContractFactory("NewToken");
  const contract = await ContractName.deploy("100000000000000000000000");
  console.log("Token Contract deployed to address:", contract.address);
}

//  deploy();

// Interact script

async function interact() {
    const contractAddress = "0x185CDd34d32e6EC7D8e69656eE0EE393681be50a";
    const contract = await ethers.getContractAt("NewToken", contractAddress);
    
    // // Call contract functions here
    // const transaction = await contract.mintFifty("100000000000000000000000", { from: "0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd" });
    // await transaction.wait(); // Wait for the transaction to be mined

      // Withdraw token from token address
      // await contract.withdrawTokenFromContract("1000000000000000000","0xcE4124fC7557c1189E5F05482ceBA60C6E317854");
    
    // await contract.settokenprice(10000000000000); // set Tokenprice

    // const tokenPrice = await contract.gettokenPrice();
    // console.log("Token price:", tokenPrice);

    // await contract.setadmin();    // set Admin
    
    // // Get transaction receipt
    // const receipt = await ethers.provider.getTransactionReceipt(transaction.hash);
    // console.log("Transaction receipt:", receipt);
    
    // check balance
    // const bal = await contract.balanceOf("0x3daD97fbAB2E41c58d36138446869F8283848ec9"); //Contract address or metamask address
    // console.log(bal);
      
    //transfer token to Dao contract
    // await contract.tokenTransfer("0xc4c2ceA7faD6C8790a92df4684D1EBdfbf16b22B","10000000000000000000000");

    // Withdraw (Amount) from address
    // await contract.withdrawFromContract("1000000000000000");
}

interact();















