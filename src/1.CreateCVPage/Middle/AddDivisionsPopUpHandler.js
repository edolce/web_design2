import styled from "styled-components";

const ChooseDivision = styled.div`
  position: absolute;
  background-color: blue;
  width: 20vw;
  transform: translate(0, 0);
  z-index: 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FakeA4 = styled.div`
  height: 5vw;
  width: 3.5vw;
  margin: 1vw;
  background-color: #993322;
  border: 1px solid white;

  &:hover {
    background-color: #123;
    cursor: pointer;
  }
;`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #1325;
  border: none;
  color: white;
  font-size: 14px;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #213;
  }
`;

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



/*
** FAKES
** Fake spawn division and block for mini preview
*/
const spawnFakeDivision = (division) => {
    return (<DivisionContainer direction={division.direction}>{
        division.blocks.map(
            (block) => {
                if (block.division === undefined) {
                    return spawnFakeBlock(block)
                } else {
                    return (<DivisionBlock id={block.id} width={block.width} height={block.height}>
                        {spawnFakeDivision(block.division)}
                    </DivisionBlock>)
                }
            }
        )
    }
    </DivisionContainer>)
}
const spawnFakeBlock = (block) => {
    return <DivisionBlock id={block.id} width={block.width} height={block.height}/>
}

//HANDLE THE POPUP WINDOW FOR CHOOSING DIVISIONS
const ChooseDivisionContainer = (props) => {
    let divisions = props.divisionsN

    let lastId = 0;
    let lastDivId = 0;

    const getLastId = (div) => {
        if (div.divisionId > lastDivId) lastDivId = div.divisionId
        div.blocks.forEach(block => {
            if (block.blockId > lastId) lastId = block.blockId
            if (block.division) getLastId(block.division)
        })
    }

    if (divisions) getLastId(divisions)


    const updateDict = (originalDict, blockId, divisionDict) => {
        if (originalDict === undefined) return divisionDict

        const updatedBlocks = originalDict.blocks.map((block) => {
            if (block.blockId === blockId) {
                return {
                    ...block,
                    division: divisionDict,
                };
            }
            return block;
        });

        console.log("id", blockId)
        console.log("updatedBlocks", {
            ...originalDict,
            blocks: updatedBlocks,
        })

        return {
            ...originalDict,
            blocks: updatedBlocks,
        };
    }


    let divisions0 = updateDict(divisions, props.blockId, {
        divisionId: lastDivId + 1, direction: "row", blocks: [
            {blockId: lastId + 1, height: "100%", width: "50%"},
            {blockId: lastId + 2, height: "100%", width: "50%"}
        ]
    })
    let divisions1 = updateDict(divisions, props.blockId, {
        divisionId: lastDivId + 1, direction: "row", blocks: [
            {blockId: lastId + 1, height: "100%", width: "33.333%"},
            {blockId: lastId + 2, height: "100%", width: "33.333%"},
            {blockId: lastId + 3, height: "100%", width: "33.333%"}
        ]
    })
    let divisions2 = updateDict(divisions, props.blockId, {
        divisionId: lastDivId + 1, direction: "row", blocks: [
            {blockId: lastId + 1, height: "100%", width: "25%"},
            {blockId: lastId + 2, height: "100%", width: "25%"},
            {blockId: lastId + 3, height: "100%", width: "25%"},
            {blockId: lastId + 4, height: "100%", width: "25%"},
        ]
    })
    let divisions3 = updateDict(divisions, props.blockId, {
        divisionId: lastDivId + 1, direction: "column", blocks: [
            {blockId: lastId + 1, height: "50%", width: "100%"},
            {blockId: lastId + 2, height: "50%", width: "100%"}
        ]
    })
    let divisions4 = updateDict(divisions, props.blockId, {
        divisionId: lastDivId + 1, direction: "column", blocks: [
            {blockId: lastId + 1, height: "33.333%", width: "100%"},
            {blockId: lastId + 2, height: "33.333%", width: "100%"},
            {blockId: lastId + 3, height: "33.333%", width: "100%"}
        ]
    })
    let divisions5 = updateDict(divisions, props.blockId, {
        divisionId: lastDivId + 1, direction: "column", blocks: [
            {blockId: lastId + 1, height: "25%", width: "100%"},
            {blockId: lastId + 2, height: "25%", width: "100%"},
            {blockId: lastId + 3, height: "25%", width: "100%"},
            {blockId: lastId + 4, height: "25%", width: "100%"}
        ]
    })
    let divisions6 = updateDict(divisions, props.blockId, {
        divisionId: lastDivId + 1, direction: "row", blocks: [
            {blockId: lastId + 1, height: "100%", width: "33%"},
            {blockId: lastId + 2, height: "100%", width: "67%"}
        ]
    })
    let divisions7 = updateDict(divisions, props.blockId, {
        divisionId: lastDivId + 1, direction: "column", blocks: [
            {blockId: lastId + 1, height: "50%", width: "100%"},
            {blockId: lastId + 2, height: "25%", width: "100%"},
            {blockId: lastId + 3, height: "25%", width: "100%"}
        ]
    })

    return (
        <ChooseDivision style={{left: props.styleProp.left, top: props.styleProp.top}}>
            <CloseButton onClick={() => props.setNewDiv(undefined)}>
                X
            </CloseButton>
            <FakeA4 onClick={() => props.setDivisions(divisions0)}>
                {spawnFakeDivision(divisions0)}
            </FakeA4>
            <FakeA4 onClick={() => props.setDivisions(divisions1)}>
                {spawnFakeDivision(divisions1)}
            </FakeA4>
            <FakeA4 onClick={() => props.setDivisions(divisions2)}>
                {spawnFakeDivision(divisions2)}
            </FakeA4>
            <FakeA4 onClick={() => props.setDivisions(divisions3)}>
                {spawnFakeDivision(divisions3)}
            </FakeA4>
            <FakeA4 onClick={() => props.setDivisions(divisions4)}>
                {spawnFakeDivision(divisions4)}
            </FakeA4>
            <FakeA4 onClick={() => props.setDivisions(divisions5)}>
                {spawnFakeDivision(divisions5)}
            </FakeA4>
            <FakeA4 onClick={() => props.setDivisions(divisions6)}>
                {spawnFakeDivision(divisions6)}
            </FakeA4>
            <FakeA4 onClick={() => props.setDivisions(divisions7)}>
                {spawnFakeDivision(divisions7)}
            </FakeA4>
        </ChooseDivision>
    )
}

export default ChooseDivisionContainer