import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body, input, textarea, button{
    font-family: 'Titillium Web', sans-serif;
    line-height: 130%;
  }

  p{
    font-family: 'Titillium Web', sans-serif;
    line-height: 130%;
  }
`;
