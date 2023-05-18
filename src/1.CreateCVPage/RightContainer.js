import {Component, useEffect, useState} from "react";
import styled from "styled-components";
import Draggable from 'react-draggable';

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
  display: grid;
  place-items: center;
    &:hover {
        background-color: #213;
    }
`;


//This component is the right container of the page where the user can see all the blocks that he can add to the page
const RightContainer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleDrag = (e, ui) => {
        const { x, y } = ui;
        setPosition({ x, y });
        console.log(x, y);
    };

    const handleReset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
       <MainContainer>
           <Draggable
               handle=".handle"
               defaultPosition={position}
                position={position}
               onDrag={handleDrag}
               onStop={handleReset}
           >
               <AddedBlock className="handle">
                   Added Block
               </AddedBlock>
           </Draggable>
       </MainContainer>
    );

}

export default RightContainer