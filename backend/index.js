require('dotenv').config();

const server = require('./server/server');

const { PORT } = process.env;
const port = PORT || 2373;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`\n*** Listening on port ${port} ***\n`);
});
