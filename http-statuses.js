/**
 * Created by vedi on 3/11/14.
 */

var util      = require('util');

function HttpStatus(code, message) {
  this.code = code;
  this.message = message;
}

util.inherits(HttpStatus, Object);

HttpStatus.prototype.createError = function(message, details) {
  return new HttpError(this, message, details);
}

var HTTP_STATUSES = {
  CONTINUE: new HttpStatus(100, 'Continue'),
  SWITCHING_PROTOCOLS: new HttpStatus(101, 'Switching Protocols'),
  OK: new HttpStatus(200, 'OK'),
  CREATED: new HttpStatus(201, 'Created'),
  ACCEPTED: new HttpStatus(202, 'Accepted'),
  NON_AUTHORITATIVE_INFORMATION: new HttpStatus(203, 'Non-Authoritative Information'),
  NO_CONTENT: new HttpStatus(204, 'No Content'),
  RESET_CONTENT: new HttpStatus(205, 'Reset Content'),
  PARTIAL_CONTENT: new HttpStatus(206, 'Partial Content'),
  MULTIPLE_CHOICES: new HttpStatus(300, 'Multiple Choices'),
  MOVED_PERMANENTLY: new HttpStatus(301, 'Moved Permanently'),
  FOUND: new HttpStatus(302, 'Found'),
  SEE_OTHER: new HttpStatus(303, 'See Other'),
  NOT_MODIFIED: new HttpStatus(304, 'Not Modified'),
  USE_PROXY: new HttpStatus(305, 'Use Proxy'),
  TEMPORARY_REDIRECT: new HttpStatus(307, 'Temporary Redirect'),
  BAD_REQUEST: new HttpStatus(400, 'Bad Request'),
  UNAUTHORIZED: new HttpStatus(401, 'Unauthorized'),
  PAYMENT_REQUIRED: new HttpStatus(402, 'Payment Required'),
  FORBIDDEN: new HttpStatus(403, 'Forbidden'),
  NOT_FOUND: new HttpStatus(404, 'Not Found'),
  METHOD_NOT_ALLOWED: new HttpStatus(405, 'Method Not Allowed'),
  NOT_ACCEPTABLE: new HttpStatus(406, 'Not Acceptable'),
  PROXY_AUTHENTICATION_REQUIRED: new HttpStatus(407, 'Proxy Authentication Required'),
  REQUEST_TIMEOUT: new HttpStatus(408, 'Request Time-out'),
  CONFLICT: new HttpStatus(409, 'Conflict'),
  GONE: new HttpStatus(410, 'Gone'),
  LENGTH_REQUIRED: new HttpStatus(411, 'Length Required'),
  PRECONDITION_FAILED: new HttpStatus(412, 'Precondition Failed'),
  REQUEST_ENTITY_TOO_LARGE: new HttpStatus(413, 'Request Entity Too Large'),
  REQUEST_URI_TOO_LONG: new HttpStatus(414, 'Request-URI Too Large'),
  UNSUPPORTED_MEDIA_TYPE: new HttpStatus(415, 'Unsupported Media Type'),
  REQUESTED_RANGE_NOT_SATISFIABLE: new HttpStatus(416, 'Requested Range not Satisfiable'),
  EXPECTATION_FAILED: new HttpStatus(417, 'Expectation Failed'),
  UNPROCESSABLE_ENTITY: new HttpStatus(422, 'Unprocessable Entity'),
  TOO_MANY_REQUESTS: new HttpStatus(429, 'Too Many Requests'),
  INTERNAL_SERVER_ERROR: new HttpStatus(500, 'Internal Server Error'),
  NOT_IMPLEMENTED: new HttpStatus(501, 'Not Implemented'),
  BAD_GATEWAY: new HttpStatus(502, 'Bad Gateway'),
  SERVICE_UNAVAILABLE: new HttpStatus(503, 'Service Unavailable'),
  GATEWAY_TIMEOUT: new HttpStatus(504, 'Gateway Time-out'),
  HTTP_VERSION_NOT_SUPPORTED: new HttpStatus(505, 'HTTP Version not Supported')
};

function HttpError(httpStatus, message, details) {
  Error.captureStackTrace(this, HttpError); //super helper method to include stack trace in error object
  this.name       = this.constructor.name;
  this.message    = message || httpStatus.message;
  this.httpStatus = httpStatus;
  this.details    = details;
}

util.inherits(HttpError, Error);

module.exports = HTTP_STATUSES;