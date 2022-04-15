import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const LoadingLabel = styled.Text`
  align-self: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 12px;
`;

const LoadingText = ({ text = "Loading..." }) => {
  return (
    <Container>
      <LoadingLabel>{text}</LoadingLabel>
    </Container>
  );
};

export default LoadingText;
