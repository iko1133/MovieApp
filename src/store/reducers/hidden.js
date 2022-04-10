import { SET_HIDDEN_MOVIES, ADD_HIDDEN_MOVIE } from "store/actionTypes";

const initialState = [];

// Hidden movies reducer
const favorites = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case SET_HIDDEN_MOVIES:
      return action.data;
    case ADD_HIDDEN_MOVIE:
      newState = [...state, action.data];
      return newState;
    default:
      return newState;
  }
};

export default favorites;
