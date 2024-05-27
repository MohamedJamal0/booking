import { StatusCodes } from 'http-status-codes';

class BookingValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.type = 'BookingValidationError';
  }
}

export default BookingValidationError;
