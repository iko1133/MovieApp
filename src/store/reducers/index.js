import { combineReducers } from "redux";

import favorites from "./favorites";
import hidden from "./hidden";
import theme from "./theme";

const rootReducer = combineReducers({
  theme,
  favorites,
  hidden,
});

export default rootReducer;
