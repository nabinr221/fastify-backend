const fastifyPlugin = require("fastify-plugin");

const dbConnector = async (fastify, options) => {
  try {
    await fastify.register(require("@fastify/mysql"), {
      connectionString: "mysql://root@127.0.0.1/spotify-clone",
    });
  } catch (err) {
    console.error(err);
  }
};
module.exports = fastifyPlugin(dbConnector);
