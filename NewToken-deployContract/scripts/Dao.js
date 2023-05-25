const { ethers } = require("hardhat");

//Deploy Dao Contract

async function deploy() {
    const ContractName = await ethers.getContractFactory("Dao");
    const contract = await ContractName.deploy("0x3e59B8f23426e28f48A790d733a6883091D89BCd","0x185CDd34d32e6EC7D8e69656eE0EE393681be50a");
    console.log("Dao Contract deployed to address:", contract.address);
  }
  
//  deploy();

async function interact() {
    const contractAddress = "0xc4c2ceA7faD6C8790a92df4684D1EBdfbf16b22B";
    const contract = await ethers.getContractAt("Dao", contractAddress);
    
    // createProposal 
    // await contract.createProposal(
    //     "Offset ",
    //     " ",
    //     false,
    //     500,{value:1000000000000000}
    // );

    // // Get all proposals
    // const allProposals = await contract.getAllProposal();
    // console.log(allProposals);

    // Get user's proposals
    //  const userProposals = await contract.getUserProposals("0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd");
    //  console.log(userProposals);

    //  const proposal = await contract.getProposal(3); 
    //  console.log(proposal);

    // Add a member to the DAO
    // await contract.addmember(1,{value:10000000000000});
    //for up vote
    await contract.upvote(4,{value:100000000000000});
    //for down vote
    // await contract.downvote(1,{value:100000000000000});

    // Proposal result
    // const proposalResult = await contract.getProposalResult(3);
    // console.log(proposalResult);

    // //setProposalstake
    // await contract.setproposalstake("10000000000000000");  
    // //setVotingstake
    // await contract.setvotingstake("100000000000000");
    // //setvotingtimeperiod
    // await contract.setvotingtimeperiod(300);
    // //setvotingpercent
    // await contract.setvotingPercent(5);
    // //set globallimit
    // await contract.setLimit(2000);

    // const Configs = await contract.getConfigs();
    // console.log(Configs);

  // withdraw(Amount) from contract
  // await contract.withdrawFromContract("120000000000000");

  // withdrawtoken from contract (Token address pass)
  // await contract.withdrawTokenFromContract("0x185CDd34d32e6EC7D8e69656eE0EE393681be50a","100000000000000000000");

  // withdrawStake from contract
  // await contract.withdrawStake();
}

interact()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});