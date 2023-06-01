const { ethers } = require("hardhat");

//Deploy Dao Contract

async function deploy() {
    const ContractName = await ethers.getContractFactory("Dao");
    const contract = await ContractName.deploy("0xe85c386d7FC50Ee00dB5fc35fFd600c56b2C282B","0x196A66417D83f7b489a2bAE862F4D8C6A8b52eaD");
    console.log("Dao Contract deployed to address:", contract.address);
  }
  
 deploy();

async function interact() {
    const contractAddress = "0x34235C77e05330Ae93dA4548CEb60Bdc08368e70";
    const contract = await ethers.getContractAt("Dao", contractAddress);
    
    // createProposal 
    // await contract.createProposal(
    //     "Offset ",
    //     " ",
    //     false,
    //     200,{value:"5000000000000000000000"}
    // );

    // // Get all proposals
    // const allProposals = await contract.getAllProposal();
    // console.log(allProposals);

    // Get user's proposals
    //  const userProposals = await contract.getUserProposals("0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd");
    //  console.log(userProposals);

    //  const proposal = await contract.getProposal(1); 
    //  console.log(proposal);

    // Add a member to the DAO
    // await contract.addMember(1,{value:"1000000000000000000000"});
    //for up vote
    // await contract.upVote(3,{value:"1000000000000000000000"});
    //for down vote
    // await contract.downVote(1,{value:"1000000000000000000000"});

    // Proposal result
    // const proposalResult = await contract.getProposalResult(3);
    // console.log(proposalResult);

    // //setProposalstake
    // await contract.setProposalStake("100000000000000000000");  
    // //setVotingstake
    // await contract.setVotingStake("100000000000000000000");
    // //setvotingtimeperiod
    // await contract.setVotingTimePeriod(180);
    // //setvotingpercent
    // await contract.setVotingPercent(5);
    // //set globallimit
    // await contract.setLimit(2000);

    // const Configs = await contract.getConfigs();
    // console.log(Configs);

  // withdraw(Amount) from contract
  // await contract.withdrawFromContract("120000000000000");

  // withdrawtoken from contract (Token address pass)
  // await contract.withdrawTokenFromContract("0xBbd40ba6667ccC2a1488c60Ecd37f00d1E035A71","100000000000000000000");

  // withdrawStake from contract
  await contract.withdrawStake();
}

// interact()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
// });