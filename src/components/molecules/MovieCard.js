import React from "react";
import styled from "styled-components/native";

import * as CONSTANTS from "config/constants";
import Eye from "assets/icons/Eye";
import FilledHeart from "assets/icons/FilledHeart";

const Container = styled.TouchableOpacity`
  flex-direction: row;
`;

const Image = styled.Image`
  aspect-ratio: 1;
  border-radius: 6px;
  width: 100%;
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

const NameContainer = styled.View`
  align-items: center;
  bottom: 0px;
  background-color: ${({ theme }) => theme.MOVIE_CARD_INFO_BACKGROUND_COLOR};
  padding: 4px 8px;
  position: absolute;
  width: 100%;
`;

const MovieTitle = styled.Text`
  color: ${({ theme }) => theme.MOVIE_CARD_INFO_TEXT_COLOR};
  font-size: 18px;
`;

/**
 * A card displaying movie object poster and title, while having several on press options
 * @param {object} style - Styling of the card itself
 * @param {function} onPress - A callback after the card is pressed
 * @param {object} item - Object describing the given item
 * @param {boolean} isFavorite - A boolean, indicating whether item displayed is favorite or not
 * @param {function} onHeartPress - A callback after heart icon is pressed
 * @param {function} onHidePress - A callback after eye icon is pressed
 */
const MovieCard = ({
  style,
  onPress,
  item,
  isFavorite,
  onHeartPress,
  onHidePress,
}) => {
  return (
    <Container style={style} onPress={onPress} activeOpacity={0.9}>
      <Image
        source={{
          uri: item.image ? item.image : CONSTANTS.IMAGE_NOT_FOUND_IMAGE,
        }}
        // resizeMode="contain"
      />
      <FavoriteButton onPress={onHeartPress}>
        <FilledHeart filled={isFavorite} />
      </FavoriteButton>

      <HideMovieButton onPress={onHidePress}>
        <Eye />
      </HideMovieButton>

      <NameContainer>
        <MovieTitle>{item.title}</MovieTitle>
      </NameContainer>
    </Container>
  );
};

export default MovieCard;
