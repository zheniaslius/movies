import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  div {
    box-sizing: border-box;
  }

  button {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const theme = {
  light_blue: '#10d5ff',
  light_grey: '#878ea2',
  dark_grey: '#0c171e'
}


const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
     @media (max-width: ${sizes[label]}px) {
        ${css(...args)};
     }
  `
  return acc
}, {})

export default GlobalStyle;