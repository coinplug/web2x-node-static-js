const erc721LaneABI = [
    {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "sourceChainId",
            "type": "uint256"
          },
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
          },
          {
            "internalType": "string",
            "name": "metadata",
            "type": "string"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];

async function ccmpMint(params) {
    const mintInterface = new ethers.Interface(erc721LaneABI);
    const encodedData = mintInterface.encodeFunctionData('mint', [
        params.sourceChainId, 
        params.underliyngTokenAddress, 
        params.to,
        params.tokenId,
        params.deadline,
        params.metadata
    ]);
    return encodedData;
}

mainFunction = ccmpMint;
