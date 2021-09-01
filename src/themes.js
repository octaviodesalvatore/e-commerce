import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  buttonBackground: "#18e86b",
  background: "#efefef;",
  backgroundCard: "#fff",
  buttonText: "#fff",
  button: "#000000",
  color: "#000",
  svg: "black",
  colorAside: "#666",
  colorTitleAside: "#333",
  weaponName: "#000",
  img: "https://www.skinwallet.com/static/sell-instantly-hero-ec633d4949e21189398f3e23b0e7a503.jpg",
};
export const darkTheme = {
  buttonBackground: "#ffd7bc",
  background: "#0D0D0D",
  //   backgroundCard: "#282c36",
  button: "#ffd7bc",
  buttonText: "#000",
  backgroundCard: "#131313",
  backgroundHome: "#000",
  // background: "#181818",
  // backgroundCard: "#373737",
  color: "#fff",
  svg: "white",
  colorAside: "#fff",
  colorTitleAside: "#ffd7bc",
  weaponName: "#ffd7bc",
  img: "https://www.skinwallet.com/static/sell-on-market-hero-f3f499a865d238a5e7ed1ee8437d11fe.jpg",
};

export const GlobalStytles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.background};
        transition: all 0.5s ease;
        height: 100vh;
    }
`;
