const express = require("express");
const MoviesService = require("../services/movies");
const passport = require("passport");
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require("../utils/schemas/movies");
const validationHandler = require("../utils/middleware/validationHandler");

//JWT strategy
require("../utils/auth/strategies/jwt");

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  const moviesService = new MoviesService();

  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async function (req, res, next) {
      const { tags } = req.query;
      try {
        const movies = await moviesService.getMovies({ tags });
        res.status(200).json({
          data: movies,
          message: "movies listed",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.get(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    validationHandler({ movieId: movieIdSchema }, "params"),
    async function (req, res, next) {
      const { movieId } = req.params;
      try {
        const movie = await moviesService.getMovie({ movieId });
        res.status(200).json({
          data: movie,
          message: "movie retrieved",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    validationHandler(createMovieSchema),
    async function (req, res, next) {
      const { body: movie } = req;
      try {
        const createdMovieId = await moviesService.createMovie({ movie });
        res.status(201).json({
          data: createdMovieId,
          message: "movie created",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    validationHandler({ movieId: movieIdSchema }, "params"),
    validationHandler(updateMovieSchema),
    async function (req, res, next) {
      const { body: movie } = req;
      const { movieId } = req.params;
      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie,
        });
        res.status(200).json({
          data: updatedMovieId,
          message: "movie updated",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    validationHandler({ movieId: movieIdSchema }, "params"),
    async function (req, res, next) {
      const { movieId } = req.params;
      try {
        const deletedMovieId = await moviesService.deleteMovie({ movieId });
        res.status(200).json({
          data: deletedMovieId,
          message: "movie deleted",
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = moviesApi;
