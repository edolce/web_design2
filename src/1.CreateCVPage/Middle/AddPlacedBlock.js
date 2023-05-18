import styled, {css} from "styled-components";
import MinimalBlocks from "../HTML-BLOCKS/MinimalBlocks";
import {useState} from "react";

const MainContainer = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: #7700a6;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #1325;
  border: none;
  color: white;
  font-size: 24px;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #213;
  }
`;

const SkillToAdd = styled.div`
  background-color: #1325;
  width: 100%;
  height: 10%;
  border: none;
  color: white;
  font-size: 16px;
  margin: 5px 0;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background-color: #213;
  }
`;

const ModelSelectionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(114, 114, 114);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 10%;
  border: none;
  background-color: #1325;
  color: black;
  font-size: 16px;
  margin: 5px 0;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background-color: #7c49b0;
  }
`;


const ModelSelection = (props) => {
    const Title = styled.div`
      font-size: 24px;
      font-weight: bold;
    `;

    const Description = styled.div`
      font-size: 16px;
    `;


    function handleClick(model) {
        props.cancel()
        console.log("model",model)
        props.addPlacedBlock(props.blockId, model.htmlBlock(props.infos))
    }

    return <ModelSelectionContainer>
        {props.availableModels[props.infos.type].map((model) => {
            return <ModelContainer onClick={() => handleClick(model)}>
                <Title>{model.title}</Title>
                <Description>{model.description}</Description>
            </ModelContainer>
        })}
    </ModelSelectionContainer>
}

const ChooseBlockToAdd = (props) => {
    const [modelSelection, setModelSelection] = useState(undefined);

    return <MainContainer>
        {modelSelection === undefined ? null :
            <ModelSelection
                availableModels={props.availableModels}
                infos={modelSelection}
                cancel={() => {setModelSelection(undefined);props.cancel()}}
                addPlacedBlock={(a,b)=>props.addPlacedBlock(a,b)}
                blockId={props.blockId}
            />}
        <CloseButton
            onClick={props.closePopUp}
        >
            X
        </CloseButton>
        <div>{props.blockId}</div>
        {
            props.skills.map((skill) => {
                return <SkillToAdd
                    //onClick={()=>props.addPlacedBlock(props.blockId,<MinimalBlocks code={1} infos={skill}/>)}
                    onClick={() => setModelSelection(skill)}

                >
                    {skill.title}
                </SkillToAdd>
            })
        }
    </MainContainer>
}

export default ChooseBlockToAdd