export function ErrorHandler(err, req, res, next) {
    console.log(err);
    if (err.isOperational) {
        return res.status(err.statusCode).json(err.detail);
    }
    return res.status(500).json({
        message: "Internal server error"
    });
}