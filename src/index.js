const fastify = require("fastify")({ logger: true });

// db connectivity
fastify.register(require("./db/dbConnector"));

// users Routers
fastify.register(require("./routes/usersRoutes"));


/*** Run the server! */
fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
