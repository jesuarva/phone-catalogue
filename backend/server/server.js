const server = require('express')();
const setUpGlobalMiddlewares = require('./midlewares').globalMiddlewares;
const setUpEndpoints = require('./endpoints');

/**
 * Apply server middleware
 */
setUpGlobalMiddlewares(server);

/**
 * Apply routes
 */
setUpEndpoints(server);

module.exports = server;
