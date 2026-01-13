
export default class AppError extends Error {
    constructor(message, statusCode, detail) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        this.detail = detail
        Error.captureStackTrace(this, this.constructor);
    }
}