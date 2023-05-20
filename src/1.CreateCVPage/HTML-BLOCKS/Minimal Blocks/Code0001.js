import styled from "styled-components";


const SkillBlock = (props) => {

    const Container= styled.div`
      width: 80%;
      height: 100%;
      background: #21201F;
      padding-left: 10%;
      padding-right: 10%;
      overflow: hidden;
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

    const SkillsContainer = styled.div`
      margin-bottom: 10%;
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
        justify-content: space-evenly;
    `

    const Skill = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        `

    const SkillTitle = styled.div`
      width: 20%;
      height: 100%;
      color: #978E8A;
      text-align: left;
        font-size: 13px;
    `

    const ProgressBarContainer = styled.div`
        width: 50%;
        height: 20px;
        display: flex;
        align-items: center;
        `

    const ProgressBar = (props) => {
        const ProgressContainer = styled.div`
          width: 100%;
          height: 70%;

          box-sizing: border-box;
          border: 1px solid #C07C15;
          border-radius: 20px;
        `
        const Progress = styled.div`
          width: ${props.progress * 100}%;
          height: 100%;
          background: #C07C15;
            border-radius: 20px;
        `
        return (
                <ProgressContainer>
                    <Progress>

                    </Progress>
                </ProgressContainer>
        )
    }

    let infos = props.infos;

    infos = {
        block_title: "LANGUAGES",
        block_sub_title: "SKILLS",
        blocks: [
            {title: "PYTHON", value: 0.8},
            {title: "JAVA", value: 0.2},
            {title: "C++", value: 0.5},
            {title: "C#", value: 0.7},
            {title: "JAVASCRIPT", value: 0.9},
            {title: "HTML", value: 0.8},
            {title: "CSS", value: 0.8},
            {title: "REACT", value: 0.9},
        ]
    }





    return (
        <Container>
            <TitleContainer>
                <Title>
                    {infos.block_title}
                </Title>
                <Line/>
                <Subtitle>
                    {infos.block_sub_title}
                </Subtitle>
            </TitleContainer>
            <SkillsContainer>
                {infos.blocks.map((block) =>
                <Skill>
                    <SkillTitle>
                        {block.title}
                    </SkillTitle>
                    <ProgressBarContainer>
                        <ProgressBar progress={block.value}/>
                    </ProgressBarContainer>
                </Skill>
                )}
            </SkillsContainer>
        </Container>
    )
}

export default SkillBlock;