const users = require("../../cloud/users");

// handler for users list
const getUsersHandler = (req, reply) => {
  reply.send(users);
};

// handler for user details
const getUserDetailsHandler = async (req, reply) => {
  const { id } = req.params;
  const userData = await users.filter((user) => {
    return user.id === id;
  })[0];

  if (!userData) {
    return reply.status(404).send({
      errorMsg: "Post not found",
    });
  }

  return reply.send(userData);
};

const addUserHandler = (req, reply) => {
  const { username, password } = req.body;
  const id = users.length + 1;
  users.push({ id, username, password });
  reply.send("user added");
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

const deleteUsertHandler = (req, reply) => {
  const { id } = req.params;

  const userIndex = users.findIndex((user) => {
    return user.id === id;
  });

  if (userIndex === -1) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  users.splice(userIndex, 1);

  return reply.send("user deleted");
};

module.exports = {
  getUsersHandler,
  getUserDetailsHandler,
  addUserHandler,
  updateUserHandler,
  deleteUsertHandler,
};
