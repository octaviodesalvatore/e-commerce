import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#fff",
  backgroundCard: "#fff",
  buttonText: "#fff",
  button: "#000000",
  color: "#000",
  svg: "black",
};
export const darkTheme = {
  background: "#000",
  //   backgroundCard: "#282c36",
  button: "#ffffff",
  buttonText: "#000",
  backgroundCard: "#070707",
  // background: "#181818",
  // backgroundCard: "#373737",
  color: "#fff",
  svg: "white",
};

export const GlobalStytles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.background};
        transition: all 0.5s ease;
        height: 100vh;
    }
`;
