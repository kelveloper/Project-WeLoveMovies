const router = require("express").Router();
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router //This route should return all the theaters and, the movies playing at each theatre added to the movies key.
	.route("/")
	.get(controller.list)
	.all(methodNotAllowed);

module.exports = router;