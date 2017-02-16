/**
 * Created by vedi on 3/11/14.
 */

'use strict';

const { STATUS_CODES } = require('http');

const HttpStatus = require('./http-status');

function createHttpStatus(code) {
  return new HttpStatus(code, STATUS_CODES[code]);
}

const HTTP_STATUSES = {
  CONTINUE: createHttpStatus(100),
  SWITCHING_PROTOCOLS: createHttpStatus(101),
  OK: createHttpStatus(200),
  CREATED: createHttpStatus(201),
  ACCEPTED: createHttpStatus(202),
  NON_AUTHORITATIVE_INFORMATION: createHttpStatus(203),
  NO_CONTENT: createHttpStatus(204),
  RESET_CONTENT: createHttpStatus(205),
  PARTIAL_CONTENT: createHttpStatus(206),
  MULTIPLE_CHOICES: createHttpStatus(300),
  MOVED_PERMANENTLY: createHttpStatus(301),
  FOUND: createHttpStatus(302),
  SEE_OTHER: createHttpStatus(303),
  NOT_MODIFIED: createHttpStatus(304),
  USE_PROXY: createHttpStatus(305),
  TEMPORARY_REDIRECT: createHttpStatus(307),
  BAD_REQUEST: createHttpStatus(400),
  UNAUTHORIZED: createHttpStatus(401),
  PAYMENT_REQUIRED: createHttpStatus(402),
  FORBIDDEN: createHttpStatus(403),
  NOT_FOUND: createHttpStatus(404),
  METHOD_NOT_ALLOWED: createHttpStatus(405),
  NOT_ACCEPTABLE: createHttpStatus(406),
  PROXY_AUTHENTICATION_REQUIRED: createHttpStatus(407),
  REQUEST_TIMEOUT: createHttpStatus(408),
  CONFLICT: createHttpStatus(409),
  GONE: createHttpStatus(410),
  LENGTH_REQUIRED: createHttpStatus(411),
  PRECONDITION_FAILED: createHttpStatus(412),
  REQUEST_ENTITY_TOO_LARGE: createHttpStatus(413),
  REQUEST_URI_TOO_LONG: createHttpStatus(414),
  UNSUPPORTED_MEDIA_TYPE: createHttpStatus(415),
  REQUESTED_RANGE_NOT_SATISFIABLE: createHttpStatus(416),
  EXPECTATION_FAILED: createHttpStatus(417),
  UNPROCESSABLE_ENTITY: createHttpStatus(422),
  TOO_MANY_REQUESTS: createHttpStatus(429),
  INTERNAL_SERVER_ERROR: createHttpStatus(500),
  NOT_IMPLEMENTED: createHttpStatus(501),
  BAD_GATEWAY: createHttpStatus(502),
  SERVICE_UNAVAILABLE: createHttpStatus(503),
  GATEWAY_TIMEOUT: createHttpStatus(504),
  HTTP_VERSION_NOT_SUPPORTED: createHttpStatus(505),
};

module.exports = HTTP_STATUSES;
