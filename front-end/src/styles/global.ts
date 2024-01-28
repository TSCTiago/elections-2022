import { createGlobalStyle } from 'styled-components';
import gothamLight from '../assets/fonts/GothamLight.ttf';
import gothamBold from '../assets/fonts/GothamBold.otf';
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GothamLight';
    src: url(${gothamLight});
  }

  @font-face {
    font-family: 'GothamBold';
    src: url(${gothamBold});
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    scroll-behavior: smooth;
    font-family: 'Prompt', sans-serif;
    
  }

  html {
    overflow: auto;
    overflow-x: hidden;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: GothamLight, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
  
 

`;
