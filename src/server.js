const fastify = require("fastify")({ logger: true });
require("dotenv").config();
const PORT = process.env.PORT || 5000;

fastify.register(require("./config/dbConnector")); //database conection import
fastify.register(require("./routes/usersRoutes")); // users route import

/*** Run the server! */
fastify.listen(PORT, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
