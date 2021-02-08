const sinon = require("sinon");
const { moviesMock, filteredMoviesMock } = require("./movies");

const getAllStub = sinon.stub();

getAllStub.withArgs("movies").resolves(moviesMock);

const getStub = sinon.stub();
const movieId = moviesMock[0].id;
getStub.withArgs("movies", movieId).resolves(moviesMock[0]);

const tagQuery = { tags: { $in: ["Drama"] } };
getAllStub.withArgs("movies", tagQuery).resolves(filteredMoviesMock("Drama"));

const createStub = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }
  get(collection, movieId) {
    return getStub(collection, movieId);
  }
  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  getStub,
  MongoLibMock,
};
