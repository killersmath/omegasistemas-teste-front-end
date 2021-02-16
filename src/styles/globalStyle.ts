import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: #f8f8f8;
  }

  body, input, button {
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;
 
export default GlobalStyle;