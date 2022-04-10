import {
  SET_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "store/actionTypes";

/**
 * Sets given favorite movies array as favorites in redux store
 * @param {array} favoritesArray - An array of favorite movies that need to be set
 */
export const setFavorites = (favoritesArray) => {
  return (dispatch) => {
    dispatch({
      type: SET_FAVORITES,
      data: favoritesArray,
    });
  };
};

/**
 * Adds given movie object to already existing list of favorite movies
 * @param {object} favorite - An object describing a movie that needs to be added to the favorites list
 */
export const addFavorite = (favorite) => {
  return (dispatch) => {
    dispatch({
      type: ADD_FAVORITE,
      data: favorite,
    });
  };
};

/**
 * Removes the movie with given id from redux store of favorites
 * @param {string} favoriteId - A string id of movie that needs to be removed from redux store of favorites
 */
export const deleteFavorite = (favoriteId) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_FAVORITE,
      data: favoriteId,
    });
  };
};
