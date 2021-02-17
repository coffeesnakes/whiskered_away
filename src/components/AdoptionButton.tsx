import React from 'react';
import styled from "styled-components";

const Button = styled.a`

  -webkit-box-flex: 0;
  flex: 0 0 auto;
  display: block;
  text-decoration: none;
  margin: 0px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s,
    border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 18px;
  line-height: 1.5;
  padding: 8px 16px;
  z-index:2;
  color: rgb(72, 72, 72);
  background-color: rgb(220, 225, 229);
  border-color: transparent;
  height: 55vh;
  width: 12vw;
  position: absolute;
  left: 450px;
  bottom: 400px;
  &:hover {
    color: rgb(72, 72, 72);
    background-color: rgb(255, 255, 255);
    border-color: rgb(0, 120, 130);
  }
`;
const AdoptButton = () => (
  <div className="button-container">
    <Button
      href="https://www.petfinder.com/search/pets-for-adoption/us/california/"
      target="_blank"
    >
      I want to adopt!
    </Button>
  </div>
);
export default AdoptButton;
