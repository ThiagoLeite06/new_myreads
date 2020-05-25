import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility;
  }

  body {
    background-color: #4F3673;
  }

  #root {
    padding: 1em;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;
