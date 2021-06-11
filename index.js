'use strict';

const hapi = require('@hapi/hapi');
const { parsePayload, checkHeadersForThing } = require('./lib/handlers');

const init = async () => {
  const server = hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
      path: '/',
    handler: () => 'ok'
  });






  server.route({
    method: 'GET', path: '/checkHeadersForThing',
      handler: checkHeadersForThing
  });

  server.route({
      method: 'PATCH',
      path: '/parsePayload',handler: parsePayload
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
