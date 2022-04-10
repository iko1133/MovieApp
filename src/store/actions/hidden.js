import { SET_HIDDEN_MOVIES, ADD_HIDDEN_MOVIE } from "store/actionTypes";

/**
 * Sets given hidden movies array as hidden movies in redux store
 * @param {array} hiddenMoviesArray - An array of hidden movies that need to be set
 */
export const setHiddenMovies = (hiddenMoviesArray) => {
  return (dispatch) => {
    dispatch({
      type: SET_HIDDEN_MOVIES,
      data: hiddenMoviesArray,
    });
  };
};

/**
 * Adds given movie id to already existing list of hidden movie ids
 * @param {string} movieId - A string of the movie that needs to be added to the hidden list
 */
export const hideMovie = (movieId) => {
  return (dispatch) => {
    dispatch({
      type: ADD_HIDDEN_MOVIE,
      data: movieId,
    });
  };
};
