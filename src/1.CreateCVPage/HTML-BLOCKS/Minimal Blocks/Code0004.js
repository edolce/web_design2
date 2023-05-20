import styled from "styled-components";

const Code0004 = (props) => {

    const optimizations = [
        "50x25",
        "50x33",
        "50x50",
        "50x75",

        "33x25",
        "33x33",
        "33x50",
        "33x75",
    ]


    const Container = styled.div`
      width: 100%;
      height: 100%;
      background: #4e4e4e;
      display: flex;
        flex-direction: column;
    `


    let infos = props.infos;

    infos = {
        block_title: "PROGRAMMAZIONE",
        blocks: [
            {
                title: "PYTHON",
                description: "Legend has it that Captain Blackbeard, known as the terror of the seven seas, once commanded the most fearsome fleet to sail.",
                value: 0.8,
                valueTitle: "ADVANCED"
            },
            {
                title: "JAVA",
                description: "Legend has it that Captain Blackbeard, known as the terror of the seven seas, once commanded the most fearsome fleet to sail.",
                value: 0.5,
                valueTitle: "INTERMEDIATE"
            },
            {
                title: "C++",
                description: "Legend has it that Captain Blackbeard, known as the terror of the seven seas, once commanded the most fearsome fleet to sail.",
                value: 0.3,
                valueTitle: "BEGINNER"
            }
        ]
    }

    const TitleContainer = styled.div`
      margin-left: 4.5%;
    `

    const Title = styled.div`
      color: #97917e;
      font-size: 2vh;
      margin-top: 4%;
      text-align: left;
    `

    const SkillsContainer = styled.div`
      width: 92%;
      margin-left: 4.5%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-grow: 1;
    `

    const Skill = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    `

    const LeftSkill = styled.div`
      width: 47%;
    `

    const TitleSkillContainer = styled.div`
      width: 100%;
      color: #909090;
    `

    const TitleSkill = styled.div`
      text-align: left;
      color: #909090;
        font-size: 1.4vh;
    `

    const DescriptionContainer = styled.div`
      color: #909090;
      text-align: justify;
      font-size: 0.8vh;
    `

    const Description = styled.div`
    `

    const ProgressBar = (props) => {
        const ProgressContainer = styled.div`
          width: 100%;
          height: 70%;

          box-sizing: border-box;
          border: 1px solid #cecece;
          border-radius: 20px;
        `
        const Progress = styled.div`
          width: ${props.progress * 100}%;
          height: 100%;
          background: #cecece;
          border-radius: 20px;
        `

        const Point = styled.div`
          position: absolute;
          height: 10px;
          background: #cecece;
          border-radius: 20px;
          width: 10px;
            left: -7%;
        `
        const Cont = styled.div`
            position: relative;
            width: 100%;
            height: 100%;
        `
        return (
            <Cont>
                <Point></Point>
                <ProgressContainer>
                    <Progress>

                    </Progress>
                </ProgressContainer>
            </Cont>
        )
    }

    const ProgressBarContainer = styled.div`
      width: 45%;
      height: 1vh;
    `

    const TitleProgress = styled.div`
      color: #cecece;
      font-size: 1vh;
      font-family: 'Roboto', sans-serif;
    `

    return (
        <Container>
            <TitleContainer>
                <Title>{infos.block_title}</Title>
            </TitleContainer>
            <SkillsContainer>
                {infos.blocks.map((block, index) => {
                    return (
                        <Skill>
                            <LeftSkill>
                                <TitleSkillContainer>
                                    <TitleSkill>{block.title}</TitleSkill>
                                </TitleSkillContainer>
                                <DescriptionContainer>
                                    <Description>{block.description}</Description>
                                </DescriptionContainer>
                            </LeftSkill>
                            <ProgressBarContainer>
                                <ProgressBar
                                    progress={block.value}
                                />
                                <TitleProgress>{block.valueTitle}</TitleProgress>
                            </ProgressBarContainer>
                        </Skill>
                    )
                })}
            </SkillsContainer>
        </Container>
    )
}

export default Code0004