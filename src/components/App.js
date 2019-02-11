import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Main from './Main';
import GlobalStyle, { theme, Wrapper } from './App.styles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Sidebar />
            <Route path='/' component={Main} />
          </Wrapper>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
