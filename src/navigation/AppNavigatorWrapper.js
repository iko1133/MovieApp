import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";

import * as CONSTANTS from "config/constants";
import { setFavorites } from "store/actions/favorites";
import { storeObject } from "helpers/storageHelper";
import AppNavigator from "./AppNavigator";

const ConnectionLostTextContainer = styled.SafeAreaView`
  background-color: red;
  top: 0;
  position: absolute;
  width: 100%;
`;

const ConnectionLostText = styled.Text`
  margin: 12px;
`;

/**
 * A wrapper to app navigator
 */
const AppNavigatorWrapper = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const favorites = useSelector((state) => state.favorites);
  const hidden = useSelector((state) => state.hidden);

  const dispatch = useDispatch();

  const [connectionAlive, setConnectionAlive] = useState(true);

  const storeFavorites = () => {
    storeObject(favorites, CONSTANTS.FAVORITES_STORAGE_KEY);
  };

  const storeHiddenMovies = () => {
    storeObject(hidden, CONSTANTS.HIDDEN_MOVIES_OBJECT_STORAGE_KEY);
  };

  useEffect(() => {
    storeFavorites();
  }, [favorites]);

  useEffect(() => {
    storeHiddenMovies();

    // Checking if any favorite movies were hidden
    const filteredFavorites = favorites.filter(
      (favoriteMovie) =>
        hidden.find((hiddenMovieId) => hiddenMovieId === favoriteMovie.id) ===
        undefined
    );

    // If favorites length and filtered favorites lengths are different, that means a favorite movie was hidden
    if (filteredFavorites.length !== favorites.length)
      dispatch(setFavorites(filteredFavorites));
  }, [hidden]);

  useEffect(() => {
    NetInfo.addEventListener((networkState) =>
      setConnectionAlive(networkState.isConnected)
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />

        {!connectionAlive && (
          <ConnectionLostTextContainer>
            <ConnectionLostText>Connection Lost...</ConnectionLostText>
          </ConnectionLostTextContainer>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigatorWrapper;
