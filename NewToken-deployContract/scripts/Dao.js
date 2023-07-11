const { ethers } = require("hardhat");

//Deploy Dao Contract

async function deploy() {
    const ContractName = await ethers.getContractFactory("Dao");
    const contract = await ContractName.deploy("0x72e6d982Fd46FfB0BB697D0C21A9d0cC9A6cB1b9","0x9955a6b3b0025bc9B00246B38C94CFb42999E6d1");
    console.log("Dao Contract deployed to address:", contract.address);
  }
  
 deploy();

async function interact() {
    const contractAddress = "0xB2e93e6fd9b87715CaeA467875D9Adca99DF7D1C";
    const contract = await ethers.getContractAt("Dao", contractAddress);
    
    // createProposal 
    // await contract.createProposal(
    //     "Offset ",
    //     " ",
    //     false,
    //     400,{value:"5000000000000000000000"}
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
    // await contract.upVote(4,{value:"1000000000000000000000"});
    //for down vote
    // await contract.downVote(1,{value:"1000000000000000000000"});

    // Proposal result
    // const proposalResult = await contract.getProposalResult(4);
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
  // await contract.withdrawTokenFromContract("0x9955a6b3b0025bc9B00246B38C94CFb42999E6d1","80000000000000000000000");

  // withdrawStake from contract
  // await contract.withdrawStake();
}

// interact()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
// });