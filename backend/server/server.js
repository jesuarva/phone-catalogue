const server = require('express')();
const { setUpGlobalMiddlewares } = require('./midlewares').globalMiddlewares;

/**
 * Apply server middleware
 */
setUpGlobalMiddlewares(server);

module.exports = server;
