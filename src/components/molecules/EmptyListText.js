import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const EmptyListLabel = styled.Text`
  align-self: center;
  font-size: 16px;
`;

const EmptyListText = ({ text = "List is empty!" }) => {
  return (
    <Container>
      <EmptyListLabel>{text}</EmptyListLabel>
    </Container>
  );
};

export default EmptyListText;
