const vrfABI = [
    {
        "inputs": [],
        "name": "reqVrf",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

async function reqVrf(params) {
    const vrfInterface = new ethers.Interface(vrfABI);
    const encodedData = vrfInterface.encodeFunctionData('reqVrf');

    return encodedData;
}
mainFunction = reqVrf;