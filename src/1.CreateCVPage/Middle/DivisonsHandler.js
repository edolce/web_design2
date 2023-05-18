import styled from "styled-components";
import MinimalBlocks from "../HTML-BLOCKS/MinimalBlocks";


const DivisionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1325;
  display: flex;
  flex-direction: ${props => props.direction};
`;

const DivisionBlock = styled.div`
  background-color: ${props => props.backgroundColor};
  color: white;
  height: ${props => props.height};
  width: ${props => props.width};
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  border: 1px solid white;

  &:hover {
    background-color: ${props => props.hoverColor};;
  }
`;

const DivisionBlockHoverDiv = styled.div`
    position: relative;
  color: white;
  height: ${props => props.height};
  width: ${props => props.width};
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  border: 1px solid white;

  &:hover {
    background-color: ${props => props.hoverColor};
  }

  &:hover > .test {
    visibility: visible;
  }
`;

const AddNewBlock = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .plus {
    position: relative;
    width: 5vw;
    height: 5vw;
    background-color: #00ffdc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .vert {

    position: absolute;
    width: 1vw;
    height: 80%;
    background-color: #000;
    left: 50%;
    border-radius: 25%;
    transform: translate(-50%, 0);
  }

  .horiz {
    position: absolute;
    width: 80%;
    height: 1vw;
    border-radius: 25%;
    background-color: #000;
  }
`;

const DivisionBlockContainer = (props) => {
    let placedBlock = undefined;

    props.blocksPlaced.map((block) => {
      if (block.blockPositionID === props.id) {
          placedBlock = block;
      }
    })
    const BlockMode = {
        division:
            <DivisionBlock
                id={props.id}
                width={props.width}
                height={props.height}
                onClick={(event) => props.onClick(event, props.blockId)}
                hoverColor={props.hoverColor}
            >
                {placedBlock !== undefined ? placedBlock.blockHtml:null}
            </DivisionBlock>,
        block:
            <DivisionBlockHoverDiv
                id={props.id}
                width={props.width}
                height={props.height}
                onClick={(event) => props.onClick(event, props.blockId)}
            >
                    <AddNewBlock className="test">
                        <div className="plus">
                            <div className="vert"></div>
                            <div className="horiz"></div>
                        </div>
                    </AddNewBlock>
                    {placedBlock !== undefined ? placedBlock.blockHtml: null}
            </DivisionBlockHoverDiv>

    };


    return (
        props.mode === "division" ? BlockMode.division : BlockMode.block
    )


}

const FakeDivisionBlock = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  transform: ${props => props.transform};
  z-index: 3;
  height: ${props => props.height};
  width: ${props => props.width};

  &:hover {
    background-color: brown;
    cursor: pointer;
  }
`;

const AddNewDivision = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  &:hover {
    background-color: brown;
    cursor: pointer;
  }
;`


const Divisions = (props) => {
    //Function to handle the mouse down event on the division block
    //If the mode is division, then spawn a new division block
    //If the mode is blocks, then choose which block to add
    const handleMouseDown = (event, blockId) => {
        if (props.mode === "division") {
            console.log("division")
            const newDivTemp = {
                left: event.pageX - (window.innerWidth - props.windowHeight * 0.7) / 2,
                top: event.pageY,
                blockId: blockId,
            };
            props.setNewDiv(newDivTemp);
        }
        if (props.mode === "blocks") {
            console.log("blocks")
            const newBlockTemp = {
                blockId: blockId
            }
            props.setBlockPopUp(newBlockTemp);
        }
    };

    //Initial block to add new division
    const AddNewDivisionContainer = () => {
        return <AddNewDivision onClick={(event) => handleMouseDown(event, -1)}>
            <img src="https://img.icons8.com/ios/50/000000/plus.png" alt={""}/>
        </AddNewDivision>
    }

    //Function to delete the division block with the given divisionId
    const deletion = (divisionId) => {
        if (props.divisions.divisionId === divisionId) {
            props.setDivisions()
            return
        }
        let dict = {...props.divisions};
        // Recursively search for the division block with the given divisionId
        const search = (blocks) => {
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].division && blocks[i].division.divisionId === divisionId) {
                    // Delete the division block
                    blocks[i].division = undefined;
                    return true;
                } else if (blocks[i].division && search(blocks[i].division.blocks)) {
                    return true;
                }
            }
            return false;
        }

        // Call the search function starting from the top-level blocks array
        search(dict.blocks);

        props.setDivisions(dict);
    }


    //SPAWN THE DIVISION AT THE START OF THE APP
    const spawnDivision = (division) => {
        const firstWidth = division.blocks[0].width
        const firstHeight = division.blocks[0].height
        const id = division.divisionId
        let isLast = false
        return (<DivisionContainer direction={division.direction}>{
            division.blocks.map(
                (block) => {
                    if (block.division === undefined) {
                        return spawnBlock(block, division.direction, id)
                    } else {
                        return (<DivisionBlock id={block.id} width={block.width} height={block.height}>
                            {spawnDivision(block.division)}
                        </DivisionBlock>)
                    }
                }
            )
        }
            {getProperFakeBlock(firstWidth, firstHeight, division.direction, id)}
        </DivisionContainer>)
    }

    //SUB FUNCTION FOR SPAWN DIVISION
    const spawnBlock = (block, direction, id) => {
        return <DivisionBlockContainer
            id={block.blockId}
            width={block.width}
            height={block.height}
            blockId={block.blockId}
            onClick={(event) => handleMouseDown(event, block.blockId)}
            mode={props.mode}
            blocksPlaced={props.blocksPlaced}
        >
        </DivisionBlockContainer>
    }

    //Get the proper fake block for the division (FAKE DIVISION BLOCK IS A BLOCK THAT IS USED TO DELETE THE DIVISION)
    function getProperFakeBlock(firstWidth, firstHeight, direction, id) {
        if (props.mode !== "division") return;
        if (direction === "row") {
            return <FakeDivisionBlock left={`${parseInt(firstWidth)}%`} top={"0%"} transform={"translate(-50%,0)"}
                                      width={"20px"} height={firstHeight} onClick={() => deletion(id)}/>
        } else if (direction === "column") {
            return <FakeDivisionBlock left={"0"} top={`${parseInt(firstHeight)}%`} transform={"translate(0,-50%)"}
                                      width={firstWidth} height={"20px"} onClick={() => deletion(id)}/>
        }
    }


    return props.divisions === undefined ? <AddNewDivisionContainer/> : spawnDivision(props.divisions)

}

export default Divisions