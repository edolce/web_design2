import styled from "styled-components";

// Main Container
const MainContainer = styled.div`
  position: relative;
  background-color: #1325;
  width: 25vw;
  height: 95%;
  z-index: 1;
  margin: 1vw;
`;

const CreateBlockButton = styled.button`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  background-color: #1325;
  width: 100%;
  height: 10%;
  border: none;
  color: white;
  font-size: 16px;
  user-select: none;
  padding: 10px 20px;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: #213;
  }
`;

const AddedBlock = styled.div`-webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  background-color: #1325;
  width: 100%;
  height: 10%;
  border: none;
  color: white;
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  display: flex;
    flex-direction: column;
    justify-content: center;

  &:hover {
    background-color: #213;
  }
`;


//This component is the right container of the page where the user can see all the blocks that he can add to the page
const RightContainer = (props) => {
    const Title = styled.div`
        
    `

    const Description = styled.div`
      color: #d3d3d3;
    `

    return (
        <MainContainer>
            <AddedBlock className="handle">
                Added Block
            </AddedBlock>
            {props.blocks.map((block) => (
                <AddedBlock>
                    <Title>
                        {block.blockTitle}
                    </Title>
                    <Description>
                        {block.blockDescription}
                    </Description>
                </AddedBlock>
            ))}
            <CreateBlockButton />
        </MainContainer>
    );

}

export default RightContainer