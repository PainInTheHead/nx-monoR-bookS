import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}


body {
  /* max-width: 1440px; */
  /* margin: 0 auto; */
  padding: 0;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  color: #333;
}


a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none;
}


ol {
  padding-left: 0;
}


img {
  max-width: 100%;
  height: auto;
}

.main{
  min-height:100%;
  height: 100%;
}

`;
