// import logo from './logo.svg';
import './App.css';
import { ethers }  from 'ethers';
import ERC20 from './ABIs/token.json';

function App() {
  const approveERC20 = async () => {
    const { ethereum } = window;
    console.log(ethereum);
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider);
      const signer = provider.getSigner();
      console.log(signer);
      if (!provider) {
        console.log("Metamask is not installed, please install!");
      }
      // usdc mumbai : 0xe9DcE89B076BA6107Bb64EF30678efec11939234
      // const contract_address = ethers.utils.getAddress(
      //   "0x11F96ed43932E05586d55a3fD225b1bFF9848834" // token address
      //   );
      const contract_address = "0x197d8916358883c27faf296E75a89b0612Edd1CB"
      const contract = new ethers.Contract(contract_address, ERC20, signer);
      console.log(contract);
      const tx1 = await contract.approve( 
        "0x197d8916358883c27faf296E75a89b0612Edd1CB", // to whom approve (Token contract )
        "10000000000000000000000" // value how much to approve
      );
      tx1.wait();
      console.log(tx1);

    }
  };
 
  return (
    <div className="App">
     <h1>token approval</h1>
     <button onClick={()=>approveERC20()}>Approve ERC20</button>


    </div>
  );
}

export default App;
