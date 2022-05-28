const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
	.route("/:reviewId")
	.delete(controller.delete)
	.put(controller.update) //This route will allow you to partially or fully update a review. 
	.all(methodNotAllowed);

router
	.route("/")
	.get(controller.readReviews)
	.all(methodNotAllowed);

module.exports = router;