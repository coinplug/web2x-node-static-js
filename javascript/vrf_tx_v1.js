const ethers = require('ethers');
const entryPointABI = [
{
    "inputs": [],
    "name": "reqRandomness",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}
];

async function userOpMessage(params) {
    const functionsOpsInterface = new ethers.Interface(entryPointABI);
    const encodedData = functionsOpsInterface.encodeFunctionData('reqRandomness');
    let result = encodedData
    return result;
}
mainFunction = userOpMessage;