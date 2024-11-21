const oracleABI = [
    {
        "inputs": [
          {
            "internalType": "string",
            "name": "uri",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "params",
            "type": "string"
          }
        ],
        "name": "reqOracle",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

async function reqOracle(params) {
    const oracleInterface = new ethers.Interface(oracleABI);
    const encodedData = oracleInterface.encodeFunctionData('reqOracle', [
        params.uri,
        params.params
    ]);

    return encodedData;
}

mainFunction = reqOracle;