import React from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";

import * as CONSTANTS from "config/constants";
import { deleteFavorite } from "store/actions/favorites";
import { hideMovie } from "store/actions/hidden";
import EmptyListText from "components/molecules/EmptyListText";
import MovieCard from "molecules/MovieCard";
import Screen from "atoms/Screen";

const Container = styled(Screen)``;

const InnerContainer = styled.FlatList`
  padding: 0 12px;
`;

const ListItemCard = styled(MovieCard)`
  margin-bottom: 8px;
`;

/**
 * A screen that shows saved movies/shows that user has in his/her favorites
 * @param {object} navigation - Navigation object of the react navigation
 */
const FavoritesList = ({ navigation }) => {
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const navigateToMovie = (movieId) => {
    navigation.navigate(CONSTANTS.FAVORITE_ITEM_DETAILS, { movieId });
  };

  const hideItem = (itemId) => {
    dispatch(hideMovie(itemId));
  };

  const unfavoriteItem = (item) => {
    dispatch(deleteFavorite(item.id));
  };

  return (
    <Container>
      <InnerContainer
        showsVerticalScrollIndicator={false}
        data={favorites}
        ListEmptyComponent={EmptyListText}
        renderItem={({ item }) => (
          <ListItemCard
            item={item}
            isFavorite={true}
            onHeartPress={() => unfavoriteItem(item)}
            onHidePress={() => hideItem(item.id)}
            onPress={() => navigateToMovie(item.id)}
          />
        )}
        keyExtractor={(item) => `movie_${item.id}`}
      />
    </Container>
  );
};

export default FavoritesList;
