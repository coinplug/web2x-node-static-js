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
        "name": "_reqOracle",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
    ];

async function userOpMessage(params) {
    let userOp = {
        uri: params.uri,
        params: params.params,
        deadline: params.deadline
    };
    const encodedParams = ethers.toUtf8Bytes(userOp.params);

    const functionsOpsInterface = new ethers.Interface(entryPointABI);
    const encodedData = functionsOpsInterface.encodeFunctionData('_reqOracle', [userOp.uri, encodedParams, userOp.deadline]);
    let result = encodedData
    return result;
}

mainFunction = userOpMessage;
