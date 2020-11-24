import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faSearch } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components/native';

const Container = styled.View`
  margin: 0 auto;
  background: #eeeef2;
  width: 100%;
  height: 100%;
`;

const Header = styled.View`
  display: flex;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: 'Rubik';
`;

const SearchContainer = styled.View`
  display: flex;
`;

const SearchInput = styled.TextInput`
  display: flex;
`;

const App: () => React$Node = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>DreamJournal</Title>
          <FontAwesomeIcon icon={ faCog } />
        </Header>
        <SearchContainer>
          <SearchInput 
            placeholder="Looking for a dream?"
          />
          <FontAwesomeIcon icon={ faSearch } />
        </SearchContainer>
      </Container>
    </>
  );
};

export default App;
