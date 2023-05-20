import styled from "styled-components";

import IconSVG from "../../../test.svg"
import Icon2SVG from "../../../test2.svg"

const Code0007 = (props) => {

    const Container = styled.div`
      width: 90%;
      height: 100%;
      background: #ffffff;
      padding-left: 5%;
        padding-right: 5%;
    `

    const blockInfos = "max 4 skills"

    let infos = props.infos;

    infos = {
        block_title: "PROGRAMMAZIONE",
        blocks: [
            {
                title: "PYTHON",
                subtitle: "Intermediate",
                description: "Esperienza nella creazione di script per migliorare l'esperienza utente sul web."
            },
            {
                title: "JAVA",
                subtitle: "Advanced",
                description: "Esperienza nella creazione di script per migliorare l'esperienza utente sul web."
            },
            {
                title: "C++",
                subtitle: "Intermediate",
                description: "Esperienza nella creazione di script per migliorare l'esperienza utente sul web."
            },
            {
                title: "C#",
                subtitle: "Advanced",
                description: "Esperienza nella creazione di script per migliorare l'esperienza utente sul web."
            }
        ]
    }


    const TitleContainer = styled.div`
        padding-top: 2%;
    `

    const Title = styled.div`
      text-align: left;
      color: black;
      font-size: 2vh;
    `

    const LineContainer = styled.div`
        display: flex;
        align-items: center;
    `

    const Line = styled.div`
      width: 95%;
      height: 2px;
      background-color: #b5b5b6;
    `

    const Icon = styled.div`
      margin-right: 2%;
      width: 3%;
      position: relative;
      top: 2px;
      left: -2px;
      img{
        width: 100%;
      }
    `

    const SkillsContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    `

    const Skill = styled.div`
      width: 40%;
      margin-top: 4%;
      margin-left: 2%;
    `

    const SkillTitleContainer = styled.div`
      display: flex;
      flex-direction: row;
      position: relative;
      left: -2%;
      margin-bottom: 2%;
    `

    const SymbolSkill = styled.div`
        width: 8%;
        margin-right: 5%;
        img{
          width: 100%;
        }
    `

    const SkillTitle = styled.div`
        text-align: left;
        color: black;
        font-size: 1vh;
        
    `


    const SkillLine = styled.div`
      width: 100%;
      height: 5px;
      background-color: #be7b16;
    `

    const SkillSubtitle = styled.div`
      text-align: left;
      color: #838384;
      font-size: 0.9vh;
      font-weight: bolder;

      margin-top: 2%;
      
      margin-left: 1%;
      margin-right: 1%;
    `

    const SkillDescription = styled.div`
      text-align: justify;
      color: #838384;
      font-size: 0.8vh;
      margin-top: 2%;
      margin-bottom: 2%;
      margin-left: 1%;
      margin-right: 2%;
    `



    return (
        <Container>
            <TitleContainer>
                <Title>
                    {infos.block_title}
                </Title>
                <LineContainer>
                    <Icon>
                        <img src={IconSVG} alt=""/>
                    </Icon>
                    <Line/>
                </LineContainer>
            </TitleContainer>
            <SkillsContainer>
                {infos.blocks.map((block) =>
                <Skill>
                    <SkillTitleContainer>
                        <SymbolSkill>
                            <img src={Icon2SVG} alt=""/>
                        </SymbolSkill>
                        <SkillTitle>
                            {block.title}
                        </SkillTitle>
                    </SkillTitleContainer>
                    <SkillLine/>
                    <SkillSubtitle>
                        {block.subtitle}
                    </SkillSubtitle>
                    <SkillDescription>
                        {block.description}
                    </SkillDescription>
                    <SkillLine/>
                </Skill>
                )}
            </SkillsContainer>
        </Container>
    )
}

export default Code0007