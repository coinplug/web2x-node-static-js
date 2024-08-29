const entryPointABI = [
    {
    "inputs": [
        {
        "components": [
            { "internalType": "address", "name": "sender", "type": "address" },
            { "internalType": "uint256", "name": "nonce", "type": "uint256" },
            { "internalType": "bytes", "name": "initCode", "type": "bytes" },
            { "internalType": "bytes", "name": "callData", "type": "bytes" },
            { "internalType": "uint256", "name": "callGasLimit", "type": "uint256" },
            { "internalType": "uint256", "name": "verificationGasLimit", "type": "uint256" },
            { "internalType": "uint256", "name": "preVerificationGas", "type": "uint256" },
            { "internalType": "uint256", "name": "maxFeePerGas", "type": "uint256" },
            { "internalType": "uint256", "name": "maxPriorityFeePerGas", "type": "uint256" },
            { "internalType": "bytes", "name": "paymasterAndData", "type": "bytes" },
            { "internalType": "bytes", "name": "signature", "type": "bytes" }
        ],
        "internalType": "struct UserOperation[]",
        "name": "ops",
        "type": "tuple[]"
        },
        { "internalType": "address payable", "name": "beneficiary", "type": "address" }
    ],
    "name": "handleOps",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    }
];

async function userOpMessage(params) {
    let userOp = {
        sender: params.sender,
        nonce: params.nonce,
        initCode: (params.init_code) || '0x',
        callData: (params.call_data) || '00',
        callGasLimit: params.call_gas_limit,
        verificationGasLimit: params.verification_gas_limit,
        preVerificationGas: params.pre_verification_gas,
        maxFeePerGas: params.max_fee_per_gas,
        maxPriorityFeePerGas: params.max_priority_fee_per_gas,
        paymasterAndData: (params.paymaster_and_data),
        signature: (params.signature)
    };

    const handleOpsInterface = new ethers.Interface(entryPointABI);
    const encodedData = handleOpsInterface.encodeFunctionData('handleOps', [[userOp], params.beneficiary]);
    let result = encodedData
    return result;
}

mainFunction = userOpMessage;
