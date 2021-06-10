'use strict';
var _ = require('lodash');

module.exports = {

  parsePayload: request =>
    _.map(request.payload, (val, key) => `Your favorite ${key} is ${val}`),

  checkHeadersForThing: (request) =>
    _.includes(request.headers, 'thing') ? 'Found it!' : 'WHAMMY!'

}

