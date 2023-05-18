import styled from "styled-components";
import {useEffect, useRef, useState} from "react";

const Code0003 = (props) => {

    const Container = styled.div`
      width: 100%;
      height: 100%;
      background: #ffffff;
    `


    let infos = props.infos;

    infos = {
        block_title: "EDOARDO GUANI",
        block_sub_title: "BREVE DESCRIZIONE",
        blocks: [
            {
                title: "PYTHON",
                description: "Lavorare da casa può essere conveniente, ma anche difficile quando si tratta di mantenere alta la produttività. Ecco alcuni consigli per aiutarti a massimizzare il tuo tempo e aumentare la tua efficienza lavorativa durante la giornata."
            },
            {
                title: "JAVA",
                description: "Silla e Amore sono due termini che spesso vengono accostati nella letteratura e nella storia antica. Silla fu un generale e politico romano che nel 82 a.C. diventò dittatore di Roma. Durante il suo governo, Silla si distinse per il suo amore per la cultura greca e la filosofia, che influenzò profondamente la sua visione del mondo e della politica."
            }
        ]
    }

    const SkillsContainer = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    `

    const Skill = styled.div`
      width: 90%;
    `

    const TitleContainer = styled.div`
        width: 100%;
      color: #978E8A;
    `

    const Title = styled.div`
      text-align: left;
        color: black;
      font-size: 19px;
      margin-bottom: 2%;
        `

    const DescriptionContainer = styled.div`
        
        width: 100%;
        color: #978E8A;
        font-size: 13px;
        display: flex;
        flex-direction: row;
        `

    const Description = styled.div`
        text-align: justify;
      color: #978E8A;
    `

    const SymbolsContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      margin-right: 1%;
      align-items: center;
        `

    const Circle = styled.div`
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(192, 124, 21, 0);
      border: 2px solid #C07C15;
    `

    const Symbol = styled.div`
        color: #C07C15;
        font-size: 8px;
      font-weight: bold;
      position: relative;
      bottom: -5px;
        `

    return (
        <Container>
            <SkillsContainer>
                {infos.blocks.map((block) =>
                    <Skill>
                        <TitleContainer>
                            <Title>
                                {block.title}
                            </Title>
                        </TitleContainer>
                        <DescriptionContainer>
                            <SymbolsContainer>
                                <Circle/>
                                <Symbol>
                                    SKILL
                                </Symbol>
                            </SymbolsContainer>
                            <Description>
                                {block.description}
                            </Description>
                        </DescriptionContainer>
                    </Skill>
                )}
            </SkillsContainer>
        </Container>
    )
}

export default Code0003