const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  app.get("/api/logout", Users.logout);
  // this route now has to be authenticated
  app.get("/api/users", authenticate, Users.getAll);
  // app.get("/api/users", Users.getAll);
}