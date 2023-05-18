import styled from "styled-components";
import {useEffect, useRef, useState} from "react";


const SkillBlock2 = (props) => {
    const Container= styled.div`
        width: 100%;
        height: 100%;
        background: #21201F;
        overflow: hidden;
    `

    const ImageContainer = styled.div`
      width: 100%;
      height: 50%;
      img {
        width: 100%;
      }
    `

    const InfoContainer = styled.div`
        width: 80%;
        height: 50%;
        padding-left: 10%;
        padding-right: 10%;
        display: flex;
        flex-direction: column;
    `

    const TitleContainer = styled.div`
        margin-top: 10%;
        width: 100%;
        text-align: left;
    `

    const Line = styled.div`
      width: 60%;
      height: 1px;
      background: #ff7d00;
      margin: 5px 0;
    `

    const Title = styled.span`
      font-size: 19px;
      font-family: "capsula", serif;
      color: #ffffff;
      margin-left: 8%;
    `

    const Subtitle = styled.div`
      font-size: 13px;
      font-family: "capsula", serif;
      color: #C07C15;
      margin-top: 8%;
    `

    const Content = styled.div`
        margin-bottom: 10%;
        width: 100%;
        flex-grow: 1;
    `

    const Description = styled.div`
        font-size: 13px;
        font-family: "capsula", serif;
        color: #978E8A;
        margin-top: 2%;
        text-align: justify;
    `



    let infos = props.infos;

    infos = {
        block_title: "EDOARDO GUANI",
        block_sub_title: "BREVE DESCRIZIONE",
        block_description: "Inoltre, pianifica le tue attività e le tue scadenze in modo da avere un obiettivo preciso da raggiungere ogni giorno. Utilizza anche strumenti di gestione del tempo e della produttività, come timer e app specifiche.  Edoardo Guani è un ingegnere altamente qualificato con una vasta esperienza nella progettazione e nell'implementazione di soluzioni tecnologiche. La sua conoscenza approfondita di software e hardware gli consente di affrontare le sfide più complesse in modo efficace, garantendo risultati di alta qualità. Inoltre, la sua attenzione ai dettagli e la sua passione per l'innovazione lo rendono un collaboratore affidabile e creativo.",
    }





    return (
        <Container>
            <ImageContainer>
                <img src="../../../testProfileImage.png" alt=""/>
            </ImageContainer>
            <InfoContainer>
                <TitleContainer>
                    <Title>
                        {infos.block_title}
                    </Title>
                    <Line>

                    </Line>
                    <Subtitle>
                        {infos.block_sub_title}
                    </Subtitle>
                </TitleContainer>
                <Content>
                    <Description>
                        {infos.block_description}
                    </Description>
                </Content>
            </InfoContainer>
        </Container>
    )
}

export default SkillBlock2;