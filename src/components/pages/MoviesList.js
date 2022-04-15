import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";

import * as CONSTANTS from "config/constants";
import { addFavorite, deleteFavorite } from "store/actions/favorites";
import { searchMovies } from "store/actions/movies";
import { hideMovie } from "store/actions/hidden";
import LoadingText from "components/molecules/LoadingText";
import MovieCard from "molecules/MovieCard";
import Screen from "atoms/Screen";
import EmptyListText from "components/molecules/EmptyListText";

const Container = styled(Screen)``;

const InnerContainer = styled.FlatList`
  padding: 0 12px;
`;

const ListHeaderContainer = styled.View`
  flex-direction: row;
  margin: 12px 0;
`;

const SearchInput = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.TEXT_INPUT_BORDER_COLOR};
  border-radius: 8px;
  flex: 1;
  height: 44px;
  padding: 0 8px;
`;

const ListItemCard = styled(MovieCard)`
  margin-bottom: 8px;
`;

/**
 * A screen that shows saved movies/shows and has search to search for others
 * @param {object} navigation - Navigation object of the react navigation
 */
const MoviesList = ({ navigation }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [bounceTimerId, setBounceTimerId] = useState();
  const [searched, setSearched] = useState("");
  const [loading, setLoading] = useState(false);

  const favorites = useSelector((state) => state.favorites);
  const hidden = useSelector((state) => state.hidden);

  const dispatch = useDispatch();

  const navigateToMovie = (movieId) => {
    navigation.navigate(CONSTANTS.HOME_ITEM_DETAILS, { movieId });
  };

  const hideItem = (itemId) => {
    dispatch(hideMovie(itemId));
  };

  const toggleFavoriteStatus = (item) => {
    const indx = favorites.findIndex((movie) => movie.id === item.id);

    if (indx === -1) dispatch(addFavorite(item));
    else dispatch(deleteFavorite(item.id));
  };

  const debounceSearch = () => {
    if (bounceTimerId) clearTimeout(bounceTimerId);
    if (!searched) return;

    const currTimer = setTimeout(() => {
      setMoviesList([]);
      setLoading(true);
      loadItems();
    }, CONSTANTS.SEARCH_DEBOUNCE_TIME);

    setBounceTimerId(currTimer);
  };

  const loadItems = async () => {
    const res = await dispatch(searchMovies(searched));
    setLoading(false);

    if (res) setMoviesList(filterListFromHidden(res));
    else alert("Something went wrong");
  };

  const filterListFromHidden = (moviesList) =>
    moviesList.filter(
      (movie) => hidden.find((hiddenId) => hiddenId === movie.id) === undefined
    );

  useEffect(debounceSearch, [searched]);

  useEffect(() => {
    setMoviesList(filterListFromHidden);
  }, [hidden]);

  return (
    <Container>
      <InnerContainer
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ListHeaderContainer>
            <SearchInput placeholder="Search" onChangeText={setSearched} />
          </ListHeaderContainer>
        }
        ListEmptyComponent={loading ? LoadingText : EmptyListText}
        data={moviesList}
        renderItem={({ item }) => (
          <ListItemCard
            item={item}
            isFavorite={favorites.find((movie) => movie.id === item.id)}
            onHeartPress={() => toggleFavoriteStatus(item)}
            onHidePress={() => hideItem(item.id)}
            onPress={() => navigateToMovie(item.id)}
          />
        )}
        keyExtractor={(item) => `movie_${item.id}`}
      />
    </Container>
  );
};

export default MoviesList;
