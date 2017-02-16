/**
 * Created by vedi on 16/02/2017.
 */

'use strict';

class HttpError extends Error {
  constructor(httpStatus, message = httpStatus.message, details = {}) {
    super();
    this.captureStackTrace(HttpError); // super helper method to include stack trace in error object

    this.message = message || httpStatus.message;
    this.httpStatus = httpStatus;

    if (typeof details === 'object') {
      Object.assign(this, details);
    } else {
      this.details = details;
    }
  }

}

module.exports = HttpError;
