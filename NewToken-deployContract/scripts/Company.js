const { ethers } = require("hardhat");


//Deploy Company Contract

async function deploy() {
    const ContractName = await ethers.getContractFactory("Company");
    const contract = await ContractName.deploy();
    console.log("Company Contract deployed to address:", contract.address);
  }
  
  deploy();

async function interact() {
  const contractAddress = "0xe85c386d7FC50Ee00dB5fc35fFd600c56b2C282B"; 
  const contract = await ethers.getContractAt("Company", contractAddress);
  
  // Set user data
  // await contract.setUser(
  //   "Jay",
  //   "jay710",
  //   "jay712@gmail.com",
  //   " patel Brothers",
  //   "India",
  //   " "
  // );
  
  // Get user data
  // const user = await contract.getUser("0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd"); 
  // console.log("User data:", user);
  
  // Issue credit to a company
  // await contract.issueCredit("0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd", 10); 
  
  // Create an order
  //  await contract.createOrder(2, "100000000000000000", "0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd"); 
  
    // Buy credit from an order
  // await contract.buyCredit(1, { value: "200000000000000000"});

  //set dao Address
  // await contract.setDaoAddress("0x34235C77e05330Ae93dA4548CEb60Bdc08368e70");   // DaoAddress
  
  // Get user's orders
  // const userOrders = await contract.getUserOrders("0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd"); 
  // console.log("User orders:", userOrders);
  //   let userOrdersarr=[];
  // for(let i=0;i<userOrders.length;i++)
  // {
  //   const userOrdersDetails = await contract.orderStructMapping(userOrders[i]);
  //   userOrdersarr.push(userOrdersDetails);
  // }
  // console.log(userOrdersarr);

      // withdraw (Amount) from contract
  // await contract.withdrawFromContract("10000000000000000000");
}

// interact()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
// });
