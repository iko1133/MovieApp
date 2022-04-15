import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import LoadingText from "../LoadingText";

describe("Testing LoadingText", () => {
  it("Renders LoadingText", () =>
    expect(
      renderer.create(WrapInThemeProvider(<LoadingText />))
    ).toMatchSnapshot());

  it("Renders default loading text with different text", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(<LoadingText text="Updated loading text..." />)
      )
    ).toMatchSnapshot());
});
