const assert = require("assert");
const proxyquire = require("proxyquire");

const {
  MongoLibMock,
  getAllStub,
  getStub,
} = require("../utils/mocks/mongoLib");
const { moviesMock } = require("../utils/mocks/movies");

describe("services - movies", function () {
  const MoviesService = proxyquire("../services/movies", {
    "../lib/mongo": MongoLibMock,
  });
  const moviesService = new MoviesService();
  describe("when getMovies method is called", async function () {
    it("should call the getAll MongoLib method", async function () {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });
    it("should return an array of movies", async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepStrictEqual(result, expected);
    });
  });
  describe("when getMovie method is called", async function () {
    const movieId = {
      movieId: moviesMock[0].id,
    };
    it("should call the get MongoLib method", async function () {
      await moviesService.getMovie(movieId);
      assert.strictEqual(getStub.called, true);
    });
    it("should return the respect movie", async function () {
      const result = await moviesService.getMovie(movieId);
      const expected = moviesMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });
});
