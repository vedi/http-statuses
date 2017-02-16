/**
 * Created by vedi on 3/11/14.
 */

'use strict';

const HttpError = require('./http-error');

class HttpStatus {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  createError(message, details) {
    return new HttpError(this, message, details);
  };
}

module.exports = HttpStatus;
