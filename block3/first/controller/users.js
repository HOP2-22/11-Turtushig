exports.getUsers = (request, response) => {
  if (!request.body.firstName || !request.body.lastName) {
    response.status(400).json("bad params");
  }
};
users.push({
  id: users.length,
  firstName: request.body.firstName,
  lastName: request.body.lastName,
});
