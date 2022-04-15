import { ThemeProvider } from "styled-components/native";

import { lightTheme } from "styles/theme";

/**
 * Wraps given children into a ThemeProvider with lightTheme set as the main theme
 * @param {object} children - children to be rendered inside ThemeProvider
 */
export const WrapInThemeProvider = (children) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);
