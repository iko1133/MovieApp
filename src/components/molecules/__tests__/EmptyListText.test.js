import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import EmptyListText from "../EmptyListText";

describe("Testing EmptyListText", () => {
  it("Renders EmptyListText", () =>
    expect(
      renderer.create(WrapInThemeProvider(<EmptyListText />))
    ).toMatchSnapshot());

  it("Renders default empty list text", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <EmptyListText text="NEW, UPDATED, LONGER TEXT THAT SHOULD BE SCREEN SIZE" />
        )
      )
    ).toMatchSnapshot());
});
