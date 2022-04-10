import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import * as CONSTANTS from "config/constants";
import MoviesList from "pages/MoviesList";
import MovieDetails from "pages/MovieDetails";

const HomeStack = createStackNavigator();

/**
 * Main, home navigator of application
 */
const HomeNavigator = (props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={CONSTANTS.HOME_SCREEN}
        component={MoviesList}
        options={CONSTANTS.NO_TITLE_OPTIONS}
      />

      <HomeStack.Screen
        name={CONSTANTS.HOME_ITEM_DETAILS}
        component={MovieDetails}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
