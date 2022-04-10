import handleFetch from "../handler";
import API from "./moviesApi";

const searchMovies = (data) => {
  return new Promise((resolve, reject) => {
    return API.searchMovies(data)
      .then(handleFetch(resolve, reject).xthen)
      .catch(handleFetch(resolve, reject).xcatch);
  });
};

const getMovieDetails = (data) => {
  return new Promise((resolve, reject) => {
    return API.getMovieDetails(data)
      .then(handleFetch(resolve, reject).xthen)
      .catch(handleFetch(resolve, reject).xcatch);
  });
};

export default {
  searchMovies,
  getMovieDetails,
};
