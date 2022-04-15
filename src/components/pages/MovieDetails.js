import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import { getMovieDetails } from "store/actions/movies";
import { addFavorite, deleteFavorite } from "store/actions/favorites";
import { hideMovie } from "store/actions/hidden";
import Eye from "assets/icons/Eye";
import FilledHeart from "assets/icons/FilledHeart";
import LoadingText from "components/molecules/LoadingText";
import IMDB from "assets/icons/IMDB";
import Screen from "atoms/Screen";

const PAGE_WIDTH = Dimensions.get("window").width - 24;

const Container = styled(Screen)``;

const InnerContainer = styled.ScrollView`
  padding: 12px;
`;

const Image = styled.Image`
  aspect-ratio: 0.675;
  width: ${PAGE_WIDTH}px;
`;

const FavoriteButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.MOVIE_CARD_INFO_BACKGROUND_COLOR};
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  top: 4px;
  right: 4px;
  position: absolute;
  width: 40px;
`;

const HideMovieButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.MOVIE_CARD_INFO_BACKGROUND_COLOR};
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  top: 54px;
  right: 4px;
  padding: 8px;
  position: absolute;
  width: 40px;
`;

const MovieTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 12px;
`;

const MainInfoContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 12px 0;
`;

const IMDBImage = styled(IMDB)`
  margin-right: 4px;
`;

const ScoreLabel = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const MovieDescription = styled.Text`
  font-size: 15px;
  margin-bottom: 40px;
`;

/**
 * A page that shows detailed information of the selected movie
 * @param {object} route - Route object of the react navigation
 * @param {object} navigation - Navigation object of the react navigation
 */
const MovieDetails = ({ route, navigation }) => {
  const movieId = route.params.movieId;
  const [movieDetails, setMovieDetails] = useState();

  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.find((movie) => movie.id === movieId);

  const dispatch = useDispatch();

  const toggleFavoriteStatus = () => {
    if (isFavorite) dispatch(deleteFavorite(movieId));
    else
      dispatch(
        addFavorite({
          id: movieDetails.id,
          description: movieDetails.description,
          image: movieDetails.image,
          title: movieDetails.title,
        })
      );
  };

  const loadMovieDetails = async () => {
    const res = await dispatch(getMovieDetails(movieId));

    if (res) setMovieDetails(res);
    else alert("Something went wrong");
  };

  const hideItem = () => {
    dispatch(hideMovie(movieId));

    navigation.goBack();
  };

  useEffect(loadMovieDetails, []);

  return (
    <Container>
      {!movieDetails ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <InnerContainer showsVerticalScrollIndicator={false}>
          <Image source={{ uri: movieDetails.image }} />

          <MovieTitle>{movieDetails.title}</MovieTitle>

          <FavoriteButton onPress={toggleFavoriteStatus}>
            <FilledHeart filled={isFavorite} />
          </FavoriteButton>

          <HideMovieButton onPress={hideItem}>
            <Eye />
          </HideMovieButton>

          <MainInfoContainer>
            <IMDBImage width={40} />
            <ScoreLabel>{movieDetails.imDbRating}</ScoreLabel>
          </MainInfoContainer>

          <MovieDescription>{movieDetails.plot}</MovieDescription>
        </InnerContainer>
      )}
    </Container>
  );
};

export default MovieDetails;
