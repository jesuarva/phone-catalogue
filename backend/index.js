require('dotenv').config();

const server = require('./server/server');

const { PORT } = process.env;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`\n*** Listening on port ${PORT} ***\n`);
});
