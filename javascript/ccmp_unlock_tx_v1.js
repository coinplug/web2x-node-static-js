const erc721LaneABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "underliyngTokenAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "unlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

async function ccmpUnlock(params) {
    const unlockInterface = new ethers.Interface(erc721LaneABI);
    const encodedData = unlockInterface.encodeFunctionData('unlock', [
        params.underliyngTokenAddress, 
        params.to, 
        params.tokenId,
        params.deadline
    ]);
    return encodedData;
}

mainFunction = ccmpUnlock;
