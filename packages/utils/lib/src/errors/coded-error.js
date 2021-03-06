"use strict";
// TODO : Should these be common for all flavors
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodedError = exports.ErrorCodes = void 0;
exports.ErrorCodes = {
    /**
     * Invalid JSON was received by the server.
     * An error occurred on the server while parsing the JSON text.
     */
    PARSE_ERROR: -32700,
    /**
     * The JSON sent is not a valid Request object.
     */
    INVALID_REQUEST: -32600,
    /**
     * The method does not exist / is not available.
     */
    METHOD_NOT_FOUND: -32601,
    /**
     * Invalid method parameter(s).
     */
    INVALID_PARAMS: -32602,
    /**
     * Internal JSON-RPC error.
     */
    INTERNAL_ERROR: -32603,
    /**
     * Missing or invalid parameters
     */
    INVALID_INPUT: -32000,
    /**
     * Transaction creation failed
     */
    TRANSACTION_REJECTED: -32003,
    /**
     * 	Method is not implemented
     */
    METHOD_NOT_SUPPORTED: -32004,
    /**
     * Version of JSON-RPC protocol is not supported
     */
    JSON_RPC_VERSION_NOT_SUPPORTED: -32006
};
class CodedError extends Error {
    constructor(message, code) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.code = code;
    }
    static from(error, code) {
        const codedError = new CodedError(error.message, code);
        codedError.stack = error.stack;
        return codedError;
    }
}
exports.CodedError = CodedError;
//# sourceMappingURL=coded-error.js.map