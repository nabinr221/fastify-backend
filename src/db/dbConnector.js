const fastify = require("fastify")();
async function dbConnector() {
  try {
    await fastify.register(require("@fastify/mysql"), {
      connectionString: "mysql://root@localhost/spotify-clone",
    });
    console.log("Database connected succesfully!!!");
  } catch (err) {
    console.error(err);
  }
}
module.exports = dbConnector;
