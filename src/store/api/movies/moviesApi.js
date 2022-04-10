import config from "./config";
import client from "../client";
import * as CONSTANTS from "config/constants";

// Get search request of movies list
const searchMovies = (data) => {
  return client.get(`${config.search}/${CONSTANTS.API_KEY}/${data}`);
};

// Get details request of movie details
const getMovieDetails = (id) => {
  return client.get(`${config.details}/${CONSTANTS.API_KEY}/${id}`);
};

export default {
  searchMovies,
  getMovieDetails,
};
