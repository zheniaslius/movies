import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  button {
    outline: none;
  }
`;

export const theme = {
  light_blue: '#10d5ff',
  light_grey: '#878ea2',
  dark_grey: '#0c171e'
}

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export default GlobalStyle;