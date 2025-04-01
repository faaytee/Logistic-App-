class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    // Ensure the error is properly captured with the right class name
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
