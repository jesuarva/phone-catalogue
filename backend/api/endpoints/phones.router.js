const express = require('express');
const { handleGET } = require('./handlers');
const catalogue = require('../phones.json');
console.log({ catalogue });

const router = express.Router();

/**
 * GET
 */
router.get('/', handleGET.bind(this, catalogue));

module.exports = router;
