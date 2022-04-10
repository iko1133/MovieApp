import { SWITCH_THEME } from "store/actionTypes";

/**
 * A function that returns an action of switching theme to given baseTheme
 * @param {object} baseTheme - a theme base to be switched to
 * @returns an action
 */
export const switchTheme = (baseTheme) => {
  return (dispatch) => {
    dispatch({
      type: SWITCH_THEME,
      baseTheme,
    });
  };
};
