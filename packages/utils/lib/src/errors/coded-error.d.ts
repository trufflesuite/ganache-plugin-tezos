export declare const ErrorCodes: {
    /**
     * Invalid JSON was received by the server.
     * An error occurred on the server while parsing the JSON text.
     */
    readonly PARSE_ERROR: -32700;
    /**
     * The JSON sent is not a valid Request object.
     */
    readonly INVALID_REQUEST: -32600;
    /**
     * The method does not exist / is not available.
     */
    readonly METHOD_NOT_FOUND: -32601;
    /**
     * Invalid method parameter(s).
     */
    readonly INVALID_PARAMS: -32602;
    /**
     * Internal JSON-RPC error.
     */
    readonly INTERNAL_ERROR: -32603;
    /**
     * Missing or invalid parameters
     */
    readonly INVALID_INPUT: -32000;
    /**
     * Transaction creation failed
     */
    readonly TRANSACTION_REJECTED: -32003;
    /**
     * 	Method is not implemented
     */
    readonly METHOD_NOT_SUPPORTED: -32004;
    /**
     * Version of JSON-RPC protocol is not supported
     */
    readonly JSON_RPC_VERSION_NOT_SUPPORTED: -32006;
};
export declare class CodedError extends Error {
    code: number;
    constructor(message: string, code: number);
    static from(error: Error, code: number): CodedError;
}
//# sourceMappingURL=coded-error.d.ts.map