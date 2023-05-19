const fastify = require("fastify");
// const users = require("../../cloud/users");

// handler for users list
const getUsersHandler = (connect, req, reply) => {
  try {
    // const userData =  connect.query("SELECT * FROM users");
    // console.log(userData, "asfasf");
    connect.query("SELECT * FROM users", function onResult(err, result) {
      reply.send(err || result);
    });
  } catch (err) {
    console.log("\n err", err);
  }
};

// handler for user details
const getUserDetailsHandler = (connect, req, reply) => {
  try {
    connect.query(
      "SELECT * FROM users WHERE id=?",
      [req.params.id],
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const addUserHandler = (connect, req, reply) => {
  try {
    const { id, name, gender, address } = req.body;
    const userData = connect.query(
      "INSERT INTO users( id, name, gender, address) values(?, ?, ?, ?) ",
      [id, name, gender, address]
    );
    console.log(userData);

    if (userData) {
      reply.send("added");
    } else {
      reply.send("added");
    }
  } catch (error) {
    console.log(error);
  }
};
const updateUserHandler = (req, reply) => {
  const { username, password } = req.body;
  const { id } = req.params;

  const userData = users.filter((user) => {
    return user.id === id;
  })[0];

  if (!userData) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  users.username = username;
  users.password = password;

  return reply.send("user updated");
};

const deleteUsertHandler = (connect, req, reply) => {
  try {
    connect.query(
      "DELETE FROM users WHERE id = ?",
      [req.params.id],
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsersHandler,
  getUserDetailsHandler,
  addUserHandler,
  updateUserHandler,
  deleteUsertHandler,
};
