const server = require('./server');
const express = require('express');
const helmet = require('helmet');

module.exports = {
  globalMiddlewares: (server) => {
    server.use(express.json());
    server.use(helmet());
  },
};
