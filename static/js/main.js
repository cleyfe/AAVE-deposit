/* Moralis init code */
const serverUrl = "YOUR_SERVER_URL";
const appId = "YOUR_SERVER_APPID";
Moralis.start({ serverUrl, appId });




/*''''''''''''''''''''''*/
/* AAVE Deposit */

/*
THIS IS MY INITIAL ATTEMPT AT CREATING A AAVE DEPOSIT FUNCTION BUT IT DID NOT WORK AND NEEDS TO BE MODIFIED.
IT MUST BE DONE ON THE KOVAN TESTNET FIRST. IDEALLY ON MAINNET TOO.
DEVELOPER DOCS CAN BE FOUND AT: https://docs.aave.com/developers/ 
*/
/*''''''''''''''''''''''*/
async function deposit() {
  const web3 = await Moralis.enableWeb3();
  var user = Moralis.User.current();
  var abi = '' //couldn't find the right to use here

  let options = {
    contractAddress: '0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe', //This should be the Kovan testnet address for the Aave Smart Contract 
    functionName: 'deposit',
    abi: abi,
    params: {
      asset: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD', // DAI
      amount: 100*(10**18),
      onBehalfOf: user.get('ethAddress'),
      referralCode: 0,
    },
    //msg.Value: ''
  }

  console.log(options)
  await Moralis.executeFunction(options);

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

/*'''''''''''''''''''''''''''''''''''''''''''*/
// get all ERC20 balance for the current user
/*'''''''''''''''''''''''''''''''''''''''''''*/
async function getBalance() {
  Moralis.enableWeb3();
  var e = document.getElementById("chainSelect");
  var allSelectedValues = getSelectValues(e);
  let user = Moralis.User.current();
  for (let j = 0; j < allSelectedValues.length; j++) {
    let balances = await Moralis.Web3.getAllERC20({chain: allSelectedValues[j]});

    let tokenPrices = await getPrice(balances, allSelectedValues[j])
    //fill table
    addRow(balances, allSelectedValues[j], tokenPrices)
  }
}

function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}


function addRow(bal, chain, P) {
  var table = document.getElementById("myTableData");
  let tableBody = document.getElementById('table-body');

  let html = "";

  for(let i = 0; i < bal.length; i++) {
    var mySymbol = bal[i].symbol; 
    var myName = bal[i].name; 
    var myBalance = bal[i].balance/(10**bal[i].decimals);
    var myPrice = P[i]
    console.log(bal)

    html += "<tr>";
    html += "<td>" + chain + "</td>";
    html += "<td class='font-weight-bold'>" + mySymbol + "</td>";
    html += "<td>" + myName + "</td>";
    html += "<td>" + myBalance.toFixed(4); + "</td>";
    if(typeof(myPrice) == "number") {
      html += "<td>$" + myPrice.toFixed(2) + "</td>";
    } else {
      html += "<td>" + myPrice + "</td>";
    }
    html += "<td>$" + (myBalance*myPrice).toFixed(2) + "</td>";
    
    html += "</tr>";
  }

  tableBody.innerHTML += html;
}

function deleteTable() {
  var mytbl = document.getElementById("myTableData");
  for(var i = 1;i<mytbl.rows.length;){
    mytbl.deleteRow(i);
  }
}


/*'''''''''''''''''''''''''''''*/
/*Get Token price*/
/*''''''''''''''''''''''''''''*/ 
async function getPrice(bal, chain) {  
  var price = [];

  for (i=0; i < bal.length; i++) {
    if (i == 0) {
      switch(bal[i].symbol) {
        case 'ETH':
          bal[i].tokenAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
          chain = 'eth';
          break;
        case 'AVAX':
          bal[i].tokenAddress = '0x85e7a3697850d36164629b920cda5e414659b3bf';
          chain = 'eth';
          break;
        case 'MATIC':
          bal[i].tokenAddress = '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0';
          break;
        case 'BNB':
          bal[i].tokenAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
          break;
      }
    }

    //Handle exceptions:
    if (bal[i].symbol.endsWith('ETH')) {
      bal[i].tokenAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
      chain = 'eth';
    }

    if (bal[i].symbol.endsWith('AVAX')) {
      bal[i].tokenAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
      chain = 'avalanche';
    }

    // avoid fetching data for stable coins   
    if (bal[i].symbol == 'DAI') {
      price.push(1);
      continue;
    }
     
    let options = {
      address: bal[i].tokenAddress,
      chain: chain,
      //exchange: "PancakeSwapv2"
    };
    try {
      let pr = await Moralis.Web3API.token.getTokenPrice(options);
      price.push(pr.usdPrice);
    } catch (error) {
      console.error(error);
      price.push(error.error)
      //continue;
    }
  }
  return price
}


/*'''''''''''''''''''''''''''''*/
/*Selection of the blockchains*/
/*''''''''''''''''''''''''''''*/ 
class CustomSelect {
  constructor(originalSelect) {
    this.originalSelect = originalSelect;
    this.customSelect = document.createElement("div");
    this.customSelect.classList.add("select");

    this.originalSelect.querySelectorAll("option").forEach((optionElement) => {
      const itemElement = document.createElement("div");


      itemElement.classList.add("select__item");
      //itemElement.innerHTML = optionElement.innerHTML;

      var img = itemElement.appendChild(document.createElement('img'))
      var mysrc = optionElement.attributes.src.nodeValue;
      img.src = mysrc;
      img.className = "mt-4" 
      img.width = "80"

      var txt = itemElement.appendChild(document.createElement('h6'))
      txt.textContent = optionElement.innerHTML;
      txt.className = "font-weight-bold"
      this.customSelect.appendChild(itemElement);


      if (optionElement.selected) {
        this._select(itemElement);
      }

      itemElement.addEventListener("click", () => {
        if (
          this.originalSelect.multiple &&
          itemElement.classList.contains("select__item--selected")
        ) {
          this._deselect(itemElement);
        } else {
          this._select(itemElement);
        }
      });
    });

    this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
    this.originalSelect.style.display = "none";
  }

  _select(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);

    if (!this.originalSelect.multiple) {
      this.customSelect.querySelectorAll(".select__item").forEach((el) => {
        el.classList.remove("select__item--selected");
      });
    }

    this.originalSelect.querySelectorAll("option")[index].selected = true;
    itemElement.classList.add("select__item--selected");
  }

  _deselect(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);

    this.originalSelect.querySelectorAll("option")[index].selected = false;
    itemElement.classList.remove("select__item--selected");
  }
}

document.querySelectorAll(".custom-select").forEach((selectElement) => {
  new CustomSelect(selectElement);
});



document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("btn-getbalance").onclick = getBalance;
document.getElementById("btn-button").onclick = deposit;
