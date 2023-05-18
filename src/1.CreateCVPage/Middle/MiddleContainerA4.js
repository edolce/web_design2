import {Component, useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import ChooseDivisionContainer from "./AddDivisionsPopUpHandler";
import Divisions from "./DivisonsHandler";
import ChooseBlockToAdd from "./AddPlacedBlock";

// Main Container
const MainContainer = styled.div`
  background-color: #213;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;


const MiddleContainerA4 = (props) => {

    // to handle the A4 size
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    //Size of the container is always A4
    MainContainer.defaultProps = {
        style: {
            height: `${windowHeight}px`,
            width: `${windowHeight * 0.7}px`
        }
    }
    // MAINTAIN the A4 Shape
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    //Contains all division INFO
    const [divisions, setDivisions] = useState()


    const [addDivision, setDivision] = useState(undefined);

    const [addBlock, setBlock] = useState(undefined);


    return <MainContainer>
        {addDivision === undefined ? null :
            <ChooseDivisionContainer key={`${addDivision.left}-${addDivision.top}`}
                                     styleProp={{left: addDivision.left, top: addDivision.top}}
                                     divisionsN={divisions}
                                     blockId={addDivision.blockId}
                                     setDivisions={setDivisions}
                                     setNewDiv={(newDiv)=>setDivision(newDiv)}
            />}
        {
            addBlock === undefined ? null :
                <ChooseBlockToAdd
                    closePopUp={() => setBlock(undefined)}
                    blockId={addBlock.blockId}
                    skills={props.skills}
                    addPlacedBlock={(block,htmlBlock) => props.addPlacedBlock(block,htmlBlock)}
                    availableModels={props.availableModels}
                    cancel={() => setBlock(undefined)}
                />
        }
        <Divisions divisions={divisions}
                   setNewDiv={(newDiv) => setDivision(newDiv)}
                   windowHeight={windowHeight}
                   setDivisions={(divs) => setDivisions(divs)}
                   mode={props.mode}
                   setBlockPopUp={setBlock}
                   blocksPlaced={props.blocksPlaced}
        />
    </MainContainer>
}

export default MiddleContainerA4