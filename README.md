HTTP statuses for Node
==========
Module to work with http statuses in Node.

Usage
-----

Require this module in your code and get a status object by key.
Status objects contain `code`, `message` and `createError` method to create convinient node.js 
`Error` instance with all status data included. 

Example
-----

```

var express = require('express');
var Q = require('q');
var HTTP_STATUSES = require('http-statuses');
var app = express();

app.get('/', function (req, res) {
  Q
    .try(function () {
      if (!req.param('ok')) {
        throw HTTP_STATUSES.BAD_REQUEST.createError("Not ok");
      }
      res.send("ok", HTTP_STATUSES.OK.code);
    })
    .catch(function(err) {
      res.send(err.message, err.httpStatus.code);
    });
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

```
