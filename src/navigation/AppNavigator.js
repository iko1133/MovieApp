import React, { useContext, useMemo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "styled-components/native";

import * as CONSTANTS from "config/constants";
import FavoritesNavigator from "./FavoritesNavigator";
import FilledHeart from "assets/icons/FilledHeart";
import HomeNavigator from "./HomeNavigator";
import Home from "assets/icons/Home";

const TabNavigator = createBottomTabNavigator();

const bottomTabNavigatorOptions = {
  ...CONSTANTS.NO_TITLE_OPTIONS,
  keyboardHidesTabBar: true,
};

const AppNavigator = (props) => {
  const theme = useContext(ThemeContext);

  const iconColorOptions = (focused) =>
    focused
      ? theme.NAVIGATION_PRIMARY_ICON_COLOR
      : theme.NAVIGATION_SECONDARY_ICON_COLOR;

  const homeStackOptions = useMemo(
    () => ({
      title: "Home",
      tabBarIcon: ({ focused }) => <Home color={iconColorOptions(focused)} />,
    }),
    [theme]
  );

  const favoritesStackOptions = useMemo(
    () => ({
      title: "Favorites",
      tabBarIcon: ({ focused }) => (
        <FilledHeart color={iconColorOptions(focused)} />
      ),
    }),
    [theme]
  );

  return (
    <TabNavigator.Navigator screenOptions={bottomTabNavigatorOptions}>
      <TabNavigator.Screen
        name={CONSTANTS.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={homeStackOptions}
      />
      <TabNavigator.Screen
        name={CONSTANTS.FAVORITES_NAVIGATOR}
        component={FavoritesNavigator}
        options={favoritesStackOptions}
      />
    </TabNavigator.Navigator>
  );
};

export default AppNavigator;
