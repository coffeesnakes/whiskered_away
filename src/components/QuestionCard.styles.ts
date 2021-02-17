import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebe8e7;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 200px 200px 200px 200px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: flex-start;
  p {
    font-size: 1rem;
  }
`;
// button types
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    z-index: 3;
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap");

    cursor: pointer;
    user-select: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
