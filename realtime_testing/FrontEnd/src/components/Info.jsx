import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { BiFace } from "react-icons/bi";
import { cardShadow, hoverEffect, themeColor } from "../utils";
function Info() {
  return (
    <InfoCard>
      <Card className = 'Concentrado0'>
        <CardContent>
          <Row>
            <Digit className = 'Concentrado1'>
              <BiFace />
              </Digit>
            <InfoContainer>
              <Title>Concentrado</Title>
              {/* <SubTitle>In top 20%</SubTitle> */}
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card className = 'Aburrido0'>
        <CardContent>
          <Row>
            <Digit className='Aburrido1'>
              <BiFace />
            </Digit>
            <InfoContainer>
              <Title>Aburrido</Title>
              {/* <SubTitle>8 this month</SubTitle> */}
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card className = 'Confundido0'>
        <CardContent>
          <Row>
            <Digit className = 'Confundido1'>
              <BiFace />
            </Digit>
            <InfoContainer>
              <Title>Confundido</Title>
              {/* <SubTitle>8 this month</SubTitle> */}
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card className = 'Frustrado0'>
        <CardContent>
          <Row>
            <Digit className = 'Frustrado1'>
              <BiFace />
            </Digit>
            <InfoContainer>
              <Title>Frustrado</Title>
              {/* <SubTitle>8 this month</SubTitle> */}
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const Card = styled.div`
  
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  padding: 0.3rem 1rem 0.1rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
const Digit = styled.div`
  
  padding: 0.3rem 0.8rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h3`
  color: black;
`;
const SubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;

export default Info;
