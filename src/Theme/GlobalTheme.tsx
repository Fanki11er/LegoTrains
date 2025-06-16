import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
*,*::after, *::before{
    box-sizing: border-box ;
    margin: 0 ;
    padding:0 ;
}

body {
    font-family: ${theme.defaultFontFamily} ;
    background-color: ${theme.colors.lightBlack};
    color:${theme.colors.white}; 
    width: 100vw;
    min-height: 100dvh;
}

html{
    width: 100vw;
    min-height: 100dvh;
}


  li{
    list-style: none ;
}

h1, h2 {
    font-weight: 700 ;
}


h1{
    font-size:  ${theme.fontSizes.L} ;
}

h2{
    font-size:  ${theme.fontSizes.M} ;
}

a{
    text-decoration: none ;
    cursor: pointer;
    color: ${theme.colors.white};
    outline: none;

}

button {
    cursor: pointer;
    outline: none;
}

input {
  outline: none;
}



#root{
    display: flex ;
    flex-direction: column ;
    width: 100vw;
    min-height: 100dvh;
    overflow: hidden;
}
`;

export default GlobalStyle;
