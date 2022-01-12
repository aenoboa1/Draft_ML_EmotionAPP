import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import JoinSlack from "./JoinSlack";
import EmotionImage from "../assets/emotions.jpg";

function About(){
    return (
        <Container>
          <SubContainer>
            
          <TitleText>
            Aplicación de un modelo supervisado de machine learning para el reconocimiento facial de emociones para medir el «Student Engagement» en un ambiente de aprendizaje online learning.
          </TitleText>
          <Title>Objetivos</Title>
          <ColumnOne1>
          <InfoCard>
            <Card>
              <CardContent>
                {/* <Row> */}
                  <InfoContainer>
                    <Title>Objetivo General</Title>
                    <ul>
                      <li>
                        <SubTitle>Generar un modelo supervisado de machine learning para el reconocimiento facial de emociones para medir el «Student Engagement».</SubTitle>
                      </li>
                    </ul>
                  </InfoContainer>
                {/* </Row> */}
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                {/* <Row> */}
                  <InfoContainer>
                    <Title>Objetivo Específicos</Title>
                    <ul>
                      <li><SubTitle>Realizar el entrenamiento de un modelo de Clasificación CNN(Convolutional neural network) utilizando imágenes de rostros que se encuentren en un dataset de libre acceso. (e.g : AffectNet,Ascertain), para realizar la clasificación de emociones </SubTitle></li>
                      <li><SubTitle>Validar los resultados de clasificación obtenidos usando el procedimiento de división train-test-val split con métricas de evaluación( AUC ( Área bajo la curva ) , Matriz de confusión,etc). </SubTitle></li>
                      <li><SubTitle>Aplicar el modelo para generar resultados de clasificación basado en las emociones de un estudiante </SubTitle></li>
                      <li><SubTitle>Medir el «Student Engagement» en un entorno real utilizando el modelo final, y validar dichos resultados con el criterio de un experto. </SubTitle></li>
                    </ul>
                  </InfoContainer>
                {/* </Row> */}
              </CardContent>
            </Card>
    </InfoCard>
            <ColumnTwo1>
                    <TitleText>Emociones</TitleText>
                        <ImageEmotion src={EmotionImage} />
            </ColumnTwo1>

          </ColumnOne1>
          
          <SectionTwo>
            
            <ColumnOne2>
            <TitleText>Git</TitleText>
              <JoinSlack />

            </ColumnOne2>

          </SectionTwo>


          </SubContainer>
        </Container>
    );
}

export default About;

const ImageEmotion = styled.img`
  height: 63%;
  width: auto;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.6rem 0;
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const TitleText = styled.h3`
  height: 20%;
  /* padding-top */
`;

const ColumnOne1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 80%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-wrap: nowrap;
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;
const InfoCard = styled.div`
  height: 78%;
  width: 38rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: rgb(36, 34, 34);
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
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
  float: left;
  margin-right: 1rem;
  
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
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
const ColumnOne2 = styled.div`

@media screen and (min-width: 320px) and (max-width: 1080px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
`;
const SectionTwo = styled.div` 
  width: 48%;
  gap: 1rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0rem;
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;
