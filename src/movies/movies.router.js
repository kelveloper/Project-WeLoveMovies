const router = require("express").Router();
const controller = require("./movies.controller");
const theatersRouter = require("../theaters/theaters.router");
const reviewsRouter = require("../reviews/reviews.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

//Nested Routes
router	//This route should return all the theaters where the movie is playing
	.use("/:movieId/theaters", controller.validateMovieId, theatersRouter);
router	/*This route should return all the reviews for the movie, 
		including all the critic details added to a critic key of the review. */
	.use("/:movieId/reviews", controller.validateMovieId, reviewsRouter);

router	//This route will return a list of all movies.
	.route("/")
	.get(controller.list)
	.all(methodNotAllowed);

router	//This route will return a single movie by ID.
	.route("/:movieId")
	.get(controller.read)
	.all(methodNotAllowed);

module.exports = router;