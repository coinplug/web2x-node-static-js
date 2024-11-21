const oracleRegisterDataABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "date",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_priceData",
        "type": "string"
      }
    ],
    "name": "registerData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

async function oracleRegisterData(params) {
    const oracleInterface = new ethers.Interface(oracleRegisterDataABI);
    const encodedData = oracleInterface.encodeFunctionData('registerData', [
      params.date,
      params.price
  ]);

    return encodedData;
}

mainFunction = oracleRegisterData;