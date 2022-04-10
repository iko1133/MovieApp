import {
  SET_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "store/actionTypes";

const initialState = [];

// Favorites reducer
const favorites = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case SET_FAVORITES:
      return action.data;
    case ADD_FAVORITE:
      newState = [...state, action.data];
      return newState;
    case DELETE_FAVORITE:
      newState = state.filter((item) => item.id !== action.data);
      return newState;
    default:
      return newState;
  }
};

export default favorites;
