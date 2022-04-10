import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import AppLoading from "expo-app-loading";

import * as CONSTANTS from "config/constants";
import { setFavorites } from "store/actions/favorites";
import { setHiddenMovies } from "store/actions/hidden";
import { getObject } from "helpers/storageHelper";
import AppNavigatorWrapper from "navigation/AppNavigatorWrapper";
import store from "store/";

/**
 * Movie application that enables users to search and save or hide movies/shows
 */
export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const App = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const loadFavorites = async () => {
    const result = await getObject(CONSTANTS.FAVORITES_STORAGE_KEY);

    if (result) dispatch(setFavorites(result));
  };

  const loadHiddenMovies = async () => {
    const result = await getObject(CONSTANTS.HIDDEN_MOVIES_OBJECT_STORAGE_KEY);

    if (result) dispatch(setHiddenMovies(result));
  };

  const loadApp = async () => {
    await loadFavorites();
    await loadHiddenMovies();
  };

  if (loading)
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setLoading(false)}
        onError={(error) =>
          console.error("Error while loading the app: ", error)
        }
      />
    );

  return <AppNavigatorWrapper />;
};
