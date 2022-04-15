import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import MovieCard from "../MovieCard";

const items = [
  {
    id: "tt0411008",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7273_AL_.jpg",
    title: "Lost",
    description: "(2004) (TV Series)",
  },
  {
    id: "tt0110413",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_Ratio0.7273_AL_.jpg",
    title: "Léon: The Professional",
    description: "(1994)",
  },
];

describe("Testing MovieCard", () => {
  it("Renders MovieCard", () =>
    expect(
      renderer.create(WrapInThemeProvider(<MovieCard item={items[0]} />))
    ).toMatchSnapshot());

  it("Renders movie card with given item", () =>
    expect(
      renderer.create(WrapInThemeProvider(<MovieCard item={items[1]} />))
    ).toMatchSnapshot());
});
