import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components/native";

import { WrapInThemeProvider } from "helpers/testsHelper";
import Screen from "../Screen";

const RandomText = styled.Text`
  font-size: 16px;
`;

const Button = styled.TouchableOpacity`
  background-color: red;
  height: 100%;
  width: 100%;
`;

describe("Testing Screen", () => {
  it("Renders Screen", () =>
    expect(renderer.create(WrapInThemeProvider(<Screen />))).toMatchSnapshot());

  it("Renders Screen with text in it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <Screen>
            <RandomText>Random Text!</RandomText>
          </Screen>
        )
      )
    ).toMatchSnapshot());

  it("Renders Screen with button in it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <Screen>
            <Button />
          </Screen>
        )
      )
    ).toMatchSnapshot());
});
