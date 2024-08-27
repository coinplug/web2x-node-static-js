const ethers = require('ethers');
const entryPointABI = [
    {
        "inputs": [
            {
            "internalType": "string",
            "name": "uri",
            "type": "string"
            },
            {
            "internalType": "bytes",
            "name": "params",
            "type": "bytes"
            },
            {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
            }
        ],
        "name": "_reqFunctions",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
    ];

async function userOpMessage(params) {
    let userOp = {
        uri: params.uri,
        params: ethers.toUtf8Bytes(params.params),
        deadline: params.deadline
    };

    const functionsOpsInterface = new ethers.Interface(entryPointABI);
    const encodedData = functionsOpsInterface.encodeFunctionData('_reqFunctions', [userOp.uri, userOp.params, userOp.deadline]);
    let result = encodedData
    return result;
}

mainFunction = userOpMessage;