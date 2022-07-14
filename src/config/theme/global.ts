import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #e5e5e5;
  }

  body, html, #root {
    font-family: Roboto, sans-serif;
    color: #525252;
    font-size: 14px;
    /* overflow-x: hidden; */
  }
  `;
