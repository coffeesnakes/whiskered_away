import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import catAd from '../static/cats1.jpg'
import catAd2 from '../static/cats2.jpg'
import axios from 'axios';

// const InformationBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100w;
//   height: 100vh;
//   backdrop-filter: blur(2px);
//   background-color: rgba(0, 0, 0, 0.2);
//   display: flex-start;
//   flex-flow: row nowrap;
//   justify-content: center;
//   align-items: center;
// `;

const InformationContainer1 = styled.div`
  height: 50vh;
  width: 12vw;
  z-index: 12;
  position: absolute;
  left: 450px;
  bottom: 400px;
  display: flex-start;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  background-image: url(${catAd});
  background=repeat: space;
  background-blur 5px;
  border-radius: 10px;
 border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
`;

const InformationContainer2 = styled.div`
  height: 24vh;
  width: 12vw;
  position: absolute;
  z-index: 12;
  left: 450px;
  bottom: 400px;
  display: flex-start;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  background-image: url(${catAd2});
  background=repeat: space;
  background-blur 5px;
  border-radius: 10px;
 border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
`;

const InformativeCard = () => {
  return (
    <div>
      <a href="https://www.petfinder.com/search/pets-for-adoption/us/california/">
      <InformationContainer1></InformationContainer1>
      <InformationContainer2></InformationContainer2>
      </a>
    </div>
  );
}

export default InformativeCard;
