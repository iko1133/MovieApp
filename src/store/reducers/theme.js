import { lightTheme } from "styles/theme";
import { SWITCH_THEME } from "store/actionTypes";

const initialState = {
  theme: { ...lightTheme },
};

// Theme reducer
const theme = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      let newState = {
        ...state,
        theme: { ...state.theme, ...action.baseTheme },
      };
      return newState;
    default:
      return state;
  }
};

export default theme;
