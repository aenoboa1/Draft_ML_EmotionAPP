import React from 'react';
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import axios from 'axios'

function Camara (){

    
    return(
        <SectionOne>

            <img src={'http://localhost:5000/video_feed'} className="App-logo" alt="logo" />

        </SectionOne>    

    );

}

export default Camara;

const SectionOne = styled.div`
  display: flex;
  justify-content: center;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
