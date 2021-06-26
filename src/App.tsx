import React from 'react';
import { AppContainer } from './styles'
import { Column } from './Column'
import { Card } from './Card'

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Develop the search bar,"></Card>
      </Column>
      <Column text="In Progress">
        <Card text="Develop the home page."></Card>
      </Column>
      <Column text="Done">
        <Card text="Design the application."></Card>
      </Column>
    </AppContainer>
  );
}

export default App;
