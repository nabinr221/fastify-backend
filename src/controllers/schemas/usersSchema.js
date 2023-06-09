const typeString = { type: "string" };

const user = {
  type: "object",
  properties: {
    id: { type: "number" },
    username: typeString,
    password: typeString,
    name: typeString,
  },
};

// add users
const addUserSchema = {
  body: {
    type: "object",
    required: ["username", "password"],
    properties: {
      username: typeString, // recall we created typeString earlier
      password: typeString,
    },
  },
  response: {
    200: typeString, // sending a simple message as string
  },
};

const getUsersSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: user,
      },
    },
  },
};
const getUserDetailsSchema = {
  params: {
    id: { type: "number" },
  },

  response: {
    200: user,
  },
};
const updateUserSchema = {
  body: {
    type: "object",
    required: ["username", "password"],
    properties: {
      username: typeString,
      password: typeString,
    },
  },
  params: {
    id: { type: "number" }, // converts the id param to number
  },
  response: {
    200: typeString, // a simple message will be sent
  },
};
const deleteUserSchema = {
  params: {
    id: { type: "number" }, // converts the id param to number
  },
  response: {
    200: typeString,
  },
};
module.exports = {
  getUsersSchema,
  getUserDetailsSchema,
  addUserSchema,
  updateUserSchema,
  deleteUserSchema,
};
