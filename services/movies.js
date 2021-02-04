const { moviesMock } = require("../utils/mocks/movies");

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return moviesMock || [];
  }
  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0]);
    return movie || {};
  }
  async createMovie() {
    const createdMovieId = await Promise.resolve(moviesMock[0].id);
    return createdMovieId;
  }
  async updateMovie() {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    return updatedMovieId;
  }
  async deleteMovie() {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);
    return deletedMovieId;
  }
  async patchMovie() {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    return patchedMovieId;
  }
}

module.exports = MoviesService;
