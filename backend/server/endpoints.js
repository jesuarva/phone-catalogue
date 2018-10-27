const catalogueRoutee = require('../api/endpoints/phones.router');

module.exports = (server) => {
  server.use('/phones', catalogueRoutee);
  server.use('/', (req, res) => {
    res.status(200).send({ message: 'Phone Catalogue API up un running' });
  });
};
