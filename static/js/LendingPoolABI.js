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
  
  