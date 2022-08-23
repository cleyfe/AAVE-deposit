import { myAbiERC } from './lendingPoolABI.js';
import { myLendingPoolAddressProviderContract } from './lendingPoolABI.js';
import { myLendingPoolABI } from './lendingPoolABI.js';
import { myIPool } from './lendingPoolABI.js';

var abiERC = myAbiERC()
var lendingPoolAddressProviderContract = myLendingPoolAddressProviderContract()
var lendingPoolABI = myLendingPoolABI()
var IPool = myIPool()



/* Moralis init code */
const serverUrl = "";
const appId = "";
Moralis.start({ serverUrl, appId });


/*''''''''''''''''''''''*/
/* AAVE V3 supply */
/*''''''''''''''''''''''*/
async function approve() {

  try {
    const web3 = await Moralis.enableWeb3();
    var user = Moralis.User.current();
    console.log(user)

    //approve tokens
    let options = {
      contractAddress: "0xb685400156cF3CBE8725958DeAA61436727A30c3", //WMATIC
      functionName: "approve",
      abi: abiERC,
      params: {
        _spender: "0x6C9fB0D5bD9429eb9Cd96B85B81d872281771E6B", ////Polygon Mumbai Testnet contract for Aave V3 found at https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
        _value: "500000000000000000",
      },
    };
    const output1 = await Moralis.executeFunction(options);
    console.log("output1--", output1);
    await Moralis.executeFunction(options);
  } catch (e) {
    console.log(e);
  }

} 


async function supply() {

  try {
    const web3 = await Moralis.enableWeb3();
    var user = Moralis.User.current();
    console.log(user)

    //deposit on Aave V3
    let options = {
      contractAddress: "0x6C9fB0D5bD9429eb9Cd96B85B81d872281771E6B", //Polygon Mumbai Testnet contract for Aave V3 found at https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
      functionName: "supply",
      abi: IPool,
      params: {
        asset: "0xb685400156cF3CBE8725958DeAA61436727A30c3", // │ WMATIC found on staging.aave.com
        amount: "500000000000000000",
        onBehalfOf: user.get('ethAddress'),
        referralCode: "0",
        gas: "0"
      },
    };
    await Moralis.executeFunction(options);
  } catch (e) {
    console.log(e);
  }

} 

/*''''''''''''''''''''''*/
/* AAVE Deposit */
/*''''''''''''''''''''''*/
async function deposit() {

  try {
    const web3 = await Moralis.enableWeb3();
    var user = Moralis.User.current();
    console.log(user)

    //first approve spending the tokens
    let options = {
      //contractAddress: "0x2646FcF7F0AbB1ff279ED9845AdE04019C907EBE",
      contractAddress: "0xff795577d9ac8bd7d90ee22b6c1703490b6512fd", //DAI
      functionName: "approve",
      abi: abiERC,
      params: {
        _spender: "0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe", //
        _value: "10000000000000000000",
      },
    };
    const output1 = await Moralis.executeFunction(options);
    console.log("output1--", output1);

    //deposit
    let options2 = {
      contractAddress: "0xe0fba4fc209b4948668006b2be61711b7f465bae",
      functionName: "deposit",
      abi: lendingPoolABI,
      params: {
        asset: "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
        amount: "10000000000000000000",
        onBehalfOf: user.get('ethAddress'),
        referralCode: "0",
        gas: "0"
      },
    };
    await Moralis.executeFunction(options2);
  } catch (e) {
    console.log(e);
  }

} 



/*''''''''''''''''''''''*/
/* Authentication code */
/*''''''''''''''''''''''*/
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Welcome to Bucket!" })
      var addr = user.get('ethAddress');
      var btn = document.getElementById('btn-login');
      btn.innerHTML = addr.substring(0,4) + '...' + addr.substring(addr.length - 4,addr.length);
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}


document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("btn-approve").onclick = approve;
document.getElementById("btn-deposit").onclick = supply;
