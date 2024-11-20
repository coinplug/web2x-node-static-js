const vrfRegisterDataABI = [
    {
        "inputs": [
          {
            "internalType": "string",
            "name": "_vrfData",
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
        params.vrfData
    ]);

    return encodedData;
}
mainFunction = vrfRegisterData;