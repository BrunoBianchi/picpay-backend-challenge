export enum APIErrors {
    authenticationError = "Authentication error",
    authorizationError = "Authorization error",
    notFoundError = "Not found error",
    internalServerError = "Internal server error",
    badRequestError = "Bad request error",
    conflictError = "Conflict error",
    forbiddenError = "Forbidden error",
    unauthorizedError = "Unauthorized error",
    paymentRequiredError = "Payment required error",
    requestTimeoutError = "Request timeout error",
    requestEntityTooLargeError = "Request entity too large error",
    dtoError = "DTO error"
}

export class APIError extends Error {

    constructor(error:APIErrors,message:string) {
        super(JSON.stringify({error,message}))

    }
}

