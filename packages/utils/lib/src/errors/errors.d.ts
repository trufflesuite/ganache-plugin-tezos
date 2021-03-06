/**
 * Returned if the transaction contains an invalid signature.
 */
export declare const INVALID_SENDER = "invalid sender";
/**
 * Returned if the nonce of a transaction is lower than the one present in the local chain.
 */
export declare const NONCE_TOO_LOW = "nonce too low";
/**
 * Returned if a transaction's gas price is below the minimum configured for the transaction pool.
 */
export declare const UNDERPRICED = "transaction underpriced";
/**
 * Returned if the transaction is specified to use less gas than required to start the invocation.
 */
export declare const INTRINSIC_GAS_TOO_LOW = "intrinsic gas too low";
/**
 * Returned if a transaction's requested gas limit exceeds the maximum allowance of the current block.
 */
export declare const GAS_LIMIT = "exceeds block gas limit";
/**
 * Prefix for a single VM Exception occuring when running a transaction or block
 */
export declare const VM_EXCEPTION = "VM Exception while processing transaction: ";
/**
 * Prefix for multiple VM Exceptions occuring when running transactions or a block
 */
export declare const VM_EXCEPTIONS = "Multiple VM Exceptions while processing transactions: : \n\n";
//# sourceMappingURL=errors.d.ts.map