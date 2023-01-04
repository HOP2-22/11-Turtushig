const users = [
  { id: 1, firstname: "Jeff", lastname: "Turuu" },
  { id: 2, firstname: "Adam", lastname: "Toko" },
  { id: 3, firstname: "Tony", lastname: "Mak" },
];

exports.getUsers = (request, response) => {
  response.status(200).json({
    users: users,
  });
};

exports.createUsers = (request, response) => {
  users.push({ id: users.length + 1, ...request.body });
  console.log(users);
  response.status(200).json({ message: "New user is created" });
};
