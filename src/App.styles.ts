import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./static/olgamain.jpg";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 10px 50px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    positon: absolute;
    top: 250px;
    left: 250px;
    font-family: "Roboto", sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    font-family: "Roboto", sans-serif;
    max-width: 200px;
  }
`;
