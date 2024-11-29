const vrfRegisterDataABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "message",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "proof",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "publickey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "random",
        "type": "string"
      }
    ],
    "name": "registerData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

async function vrfRegisterData(params) {
    const vrfRegisterDataInterface = new ethers.Interface(vrfRegisterDataABI);
    const encodedData = vrfRegisterDataInterface.encodeFunctionData('registerData', [
      params.message,
      params.proof,
      params.publickey,
      params.random
    ]);

    return encodedData;
}
mainFunction = vrfRegisterData;