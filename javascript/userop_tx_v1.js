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
  return userOp;
}

// Expose the function to be executed by server
mainFunction = userOpMessage;
