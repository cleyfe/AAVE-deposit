/* Moralis init code */
const serverUrl = "https://uz1awvmzblm7.usemoralis.com:2053/server";
const appId = "8Il2sd5jua25yuLdHn7pSPz7P3up0ManQ3zsGHQX";
Moralis.start({ serverUrl, appId });




/*''''''''''''''''''''''*/
/* AAVE Deposit */

/*
THIS IS MY INITIAL ATTEMPT AT CREATING A AAVE DEPOSIT FUNCTION BUT IT DID NOT WORK AND NEEDS TO BE MODIFIED.
IT MUST BE DONE ON THE KOVAN TESTNET FIRST. IDEALLY ON MAINNET TOO.
DEVELOPER DOCS CAN BE FOUND AT: https://docs.aave.com/developers/ 
*/
/*''''''''''''''''''''''*/
async function deposit_old() {
  const web3 = await Moralis.enableWeb3();
  var user = Moralis.User.current();

  var abiv2 = 
  [
    {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_referralCode",
        type: "uint16"
      }
    ],
    name: "deposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  }
]
  let options = {
    contractAddress: '0x580D4Fdc4BF8f9b5ae2fb9225D584fED4AD5375c', 
    functionName: 'deposit',
    abi: abiv2,
    params: {
      //deposit: "0.0001",
      _reserve : "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", 
      _amount: "1111111111",
      //_user: user.get('ethAddress'),
      _referralCode: "0",
    },
    msgValue: '1111111111111111'
  }

  console.log(options)
  await Moralis.executeFunction(options);

} 

async function deposit() {
  console.log("in func erc");
  var abiERC = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_spender",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_from",
          type: "address",
        },
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
        {
          name: "_spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
  ];
  var lendingPoolAddressProviderContract = [
    {
      inputs: [
        {
          internalType: "string",
          name: "marketId",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "hasProxy",
          type: "bool",
        },
      ],
      name: "AddressSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "ConfigurationAdminUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "EmergencyAdminUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "LendingPoolCollateralManagerUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "LendingPoolConfiguratorUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "LendingPoolUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "LendingRateOracleUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "newMarketId",
          type: "string",
        },
      ],
      name: "MarketIdSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "PriceOracleUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "ProxyCreated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "getAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getEmergencyAdmin",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getLendingPool",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getLendingPoolCollateralManager",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getLendingPoolConfigurator",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getLendingRateOracle",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getMarketId",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPoolAdmin",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPriceOracle",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "setAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "implementationAddress",
          type: "address",
        },
      ],
      name: "setAddressAsProxy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "emergencyAdmin",
          type: "address",
        },
      ],
      name: "setEmergencyAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "manager",
          type: "address",
        },
      ],
      name: "setLendingPoolCollateralManager",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "configurator",
          type: "address",
        },
      ],
      name: "setLendingPoolConfiguratorImpl",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "pool",
          type: "address",
        },
      ],
      name: "setLendingPoolImpl",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "lendingRateOracle",
          type: "address",
        },
      ],
      name: "setLendingRateOracle",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "marketId",
          type: "string",
        },
      ],
      name: "setMarketId",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "admin",
          type: "address",
        },
      ],
      name: "setPoolAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "priceOracle",
          type: "address",
        },
      ],
      name: "setPriceOracle",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  var lendingPoolABI = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "reserve",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "onBehalfOf",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "borrowRateMode",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "borrowRate",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint16",
          name: "referral",
          type: "uint16",
        },
      ],
      name: "Borrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "reserve",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "onBehalfOf",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint16",
          name: "referral",
          type: "uint16",
        },
      ],
      name: "Deposit",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "target",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "initiator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "premium",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "referralCode",
          type: "uint16",
        },
      ],
      name: "FlashLoan",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "collateral",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "principal",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "purchaseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "liquidatedCollateralAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "liquidator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "receiveAToken",
          type: "bool",
        },
      ],
      name: "LiquidationCall",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "reserve",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "RebalanceStableBorrowRate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "reserve",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "repayer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Repay",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "reserve",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "liquidityRate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "stableBorrowRate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "variableBorrowRate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "liquidityIndex",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "variableBorrowIndex",
          type: "uint256",
        },
      ],
      name: "ReserveDataUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "reserve",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "ReserveUsedAsCollateralDisabled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "reserve",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "ReserveUsedAsCollateralEnabled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "reserve",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "rateMode",
          type: "uint256",
        },
      ],
      name: "Swap",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "Unpaused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "reserve",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Withdraw",
      type: "event",
    },
    {
      inputs: [],
      name: "FLASHLOAN_PREMIUM_TOTAL",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "LENDINGPOOL_REVISION",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_NUMBER_RESERVES",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "interestRateMode",
          type: "uint256",
        },
        {
          internalType: "uint16",
          name: "referralCode",
          type: "uint16",
        },
        {
          internalType: "address",
          name: "onBehalfOf",
          type: "address",
        },
      ],
      name: "borrow",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "onBehalfOf",
          type: "address",
        },
        {
          internalType: "uint16",
          name: "referralCode",
          type: "uint16",
        },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "balanceFromBefore",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "balanceToBefore",
          type: "uint256",
        },
      ],
      name: "finalizeTransfer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiverAddress",
          type: "address",
        },
        {
          internalType: "address[]",
          name: "assets",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "modes",
          type: "uint256[]",
        },
        {
          internalType: "address",
          name: "onBehalfOf",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "params",
          type: "bytes",
        },
        {
          internalType: "uint16",
          name: "referralCode",
          type: "uint16",
        },
      ],
      name: "flashLoan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getAddressesProvider",
      outputs: [
        {
          internalType: "contract ILendingPoolAddressesProvider",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
      ],
      name: "getConfiguration",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "data",
              type: "uint256",
            },
          ],
          internalType: "struct ReserveConfiguration.Map",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
      ],
      name: "getReserveData",
      outputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "data",
                  type: "uint256",
                },
              ],
              internalType: "struct ReserveConfiguration.Map",
              name: "configuration",
              type: "tuple",
            },
            {
              internalType: "uint128",
              name: "liquidityIndex",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "variableBorrowIndex",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "currentLiquidityRate",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "currentVariableBorrowRate",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "currentStableBorrowRate",
              type: "uint128",
            },
            {
              internalType: "uint40",
              name: "lastUpdateTimestamp",
              type: "uint40",
            },
            {
              internalType: "address",
              name: "aTokenAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "stableDebtTokenAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "variableDebtTokenAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "interestRateStrategyAddress",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "id",
              type: "uint8",
            },
          ],
          internalType: "struct ReserveLogic.ReserveData",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
      ],
      name: "getReserveNormalizedIncome",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
      ],
      name: "getReserveNormalizedVariableDebt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getReservesList",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getUserAccountData",
      outputs: [
        {
          internalType: "uint256",
          name: "totalCollateralETH",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalDebtETH",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "availableBorrowsETH",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "currentLiquidationThreshold",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "ltv",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "healthFactor",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getUserConfiguration",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "data",
              type: "uint256",
            },
          ],
          internalType: "struct UserConfiguration.Map",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "address",
          name: "aTokenAddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "stableDebtAddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "variableDebtAddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "interestRateStrategyAddress",
          type: "address",
        },
      ],
      name: "initReserve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ILendingPoolAddressesProvider",
          name: "provider",
          type: "address",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "collateral",
          type: "address",
        },
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "purchaseAmount",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "receiveAToken",
          type: "bool",
        },
      ],
      name: "liquidationCall",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "rebalanceStableBorrowRate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "rateMode",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "onBehalfOf",
          type: "address",
        },
      ],
      name: "repay",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "configuration",
          type: "uint256",
        },
      ],
      name: "setConfiguration",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "val",
          type: "bool",
        },
      ],
      name: "setPause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "address",
          name: "rateStrategyAddress",
          type: "address",
        },
      ],
      name: "setReserveInterestRateStrategyAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "bool",
          name: "useAsCollateral",
          type: "bool",
        },
      ],
      name: "setUserUseReserveAsCollateral",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "rateMode",
          type: "uint256",
        },
      ],
      name: "swapBorrowRateMode",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  let lendingPoolOptions = {
    contractAddress: "0x88757f2f99175387ab4c6a4b3067c77a695b0349",
    functionName: "getLendingPool",
    abi: lendingPoolAddressProviderContract,
  };
  //0x88757f2f99175387ab4c6a4b3067c77a695b0349
  //console.log("lendingPoolOptions-->", lendingPoolOptions);
  try {
    /*  const lendingPoolAddress = await Moralis.Web3API.native.runContractFunction(
      lendingPoolOptions
    );*/
    // console.log(lendingPoolAddress);
    // const outputLendingPool = await Moralis.Web3API.native.runContractFunction(
    //   lendingPoolOptions
    // );
    //console.log("outputLendingPool-->", outputLendingPool);
    const web3 = await Moralis.enableWeb3();
    var user = Moralis.User.current();

    let options = {
      //contractAddress: "0x2646FcF7F0AbB1ff279ED9845AdE04019C907EBE",
      contractAddress: "0xff795577d9ac8bd7d90ee22b6c1703490b6512fd", //This should be the Kovan testnet address for the Aave Smart Contract
      functionName: "approve",
      abi: abiERC,
      params: {
        _spender: "0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe", //
        _value: "10000000000000000000",
      },
    };
    const output1 = await Moralis.executeFunction(options);
    console.log("output1--", output1);
    //for deposit
    let options2 = {
      contractAddress: "0xe0fba4fc209b4948668006b2be61711b7f465bae",
      functionName: "deposit",
      abi: lendingPoolABI,
      params: {
        asset: "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
        amount: "1000000000000000000",
        onBehalfOf: user.attributes.ethAddress,
        referralCode: "0",
      },
    };
    console.log(options2);
    await Moralis.executeFunction(options2);
    //console.log("output2--", output2);
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
