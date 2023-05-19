const fastify = require("fastify")();
const {
  getUsersSchema,
  getUserDetailsSchema,
  addUserSchema,
  updateUserSchema,
  deleteUserSchema,
} = require("../controllers/schemas/usersSchema");
const {
  getUsersHandler,
  getUserDetailsHandler,
  addUserHandler,
  updateUserHandler,
  deleteUsertHandler,
} = require("../controllers/handlers/usersHandler");

const usersRoutes = async (fastify, opts, done) => {
  const connect = fastify.mysql;

  const getUsersOpts = {
    schema: getUsersSchema,
    handler: getUsersHandler.bind(null, connect),
  };

  const getUserDetailsOpts = {
    schema: getUserDetailsSchema,
    handler: getUserDetailsHandler.bind(null, connect),
  };

  const addUserOpts = {
    schema: addUserSchema,
    handler: addUserHandler.bind(null, connect),
  };

  const updateUserOpts = {
    schema: updateUserSchema,
    handler: updateUserHandler.bind(null, connect),
  };

  const deleteUserOpts = {
    schema: deleteUserSchema,
    handler: deleteUsertHandler.bind(null, connect),
  };

  fastify.post("/api/users", addUserOpts);
  fastify.get("/api/users", getUsersOpts);
  fastify.get("/api/users/:id", getUserDetailsOpts);
  fastify.put("/api/users/edit/:id", updateUserOpts);
  fastify.delete("/api/users/:id", deleteUserOpts);

  done();
};
module.exports = usersRoutes;
