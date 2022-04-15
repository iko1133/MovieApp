import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import * as CONSTANTS from "config/constants";
import FavoritesList from "components/pages/FavoritesList";
import MovieDetails from "pages/MovieDetails";

const FavoritesStack = createStackNavigator();

const movieDetailsScreenOptions = {
  title: "Details",
};

/**
 * Favorites navigator
 */
const FavoritesNavigator = (props) => {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name={CONSTANTS.FAVORITES_SCREEN}
        component={FavoritesList}
        options={CONSTANTS.NO_TITLE_OPTIONS}
      />

      <FavoritesStack.Screen
        name={CONSTANTS.FAVORITE_ITEM_DETAILS}
        component={MovieDetails}
        options={movieDetailsScreenOptions}
      />
    </FavoritesStack.Navigator>
  );
};

export default FavoritesNavigator;
