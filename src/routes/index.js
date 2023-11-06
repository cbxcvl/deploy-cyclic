const express = require("express");
const { getUsers, postUser } = require("../controllers/api1");
const validatePostUser = require("../middlewares/validatepostUser");
const routes = express.Router();
const schemasPostUser = require("../schemas/shemaspostUser");

routes.get("/users", getUsers);
routes.post("/users", validatePostUser(schemasPostUser), postUser);

module.exports = routes;
