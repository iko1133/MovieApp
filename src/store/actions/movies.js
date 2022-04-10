import moviesApiHandler from "store/api/movies/moviesApiHandler";

/**
 * A function that returns list of movies filtered by searchFor expression
 * @param {string} searchFor - An expression that needs to be searched
 * @returns an action to return list of movies or null if unsuccessful
 */
export const searchMovies = (searchFor) => async (dispatch) => {
  try {
    const data = await moviesApiHandler.searchMovies(searchFor);

    if (data && data.results) return data.results;
    return null;
  } catch (error) {
    console.log("Error while trying to get movies: ", error);
    return null;
  }
};

/**
 * A function that returns details of the movie the given id belongs to
 * @param {integer} id - the id of the movie
 * @returns an action to return details of movie or null if unsuccessful
 */
export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const data = await moviesApiHandler.getMovieDetails(id);

    if (!data.errorMessage) return data;
    return null;
  } catch (error) {
    console.log("Error while trying to get movie details: ", error);
    return null;
  }
};
