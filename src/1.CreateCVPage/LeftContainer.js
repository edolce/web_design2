import {Component, useEffect, useState} from "react";
import styled from "styled-components";

// Main Container
const MainContainer = styled.div`
  background-color: #1325;
  width: 25vw;
  height: 95%;
  z-index: 2;
  margin: 1vw;
  display: flex;
    flex-direction: row;
`;

const AvailableSkillsContainer = styled.div`
    background-color: #1325;
    width: 75%;
    height: 100%;
    font-size: 16px;
    margin-right: 5%;
`;

const ToolsContainer = styled.div`
    background-color: #1325;
    width: 20%;
    height: 100%;
    font-size: 16px;
`;

const ToolButton = styled.button`
    background-color: #1325;
    width: 100%;
    height: 10%;
    border: none;
    color: white;
    font-size: 14px;
    margin: 5px 0;
    cursor: pointer;
    &:hover {
        background-color: #213;
    }
`;

const Tools = (props) => {
    
        return(
            <ToolsContainer>
                Tools
                <ToolButton onClick={()=>props.changeMode("division")}>
                    Mode: Division
                    <img src="https://img.icons8.com/ios/50/000000/plus.png" alt={""}/>
                </ToolButton>
                <ToolButton onClick={()=>props.changeMode("blocks")}>
                    Mode: Blocks
                    <img src="https://img.icons8.com/ios/50/000000/plus.png" alt={""}/>
                </ToolButton>
            </ToolsContainer>
        )
}


const AvailableSkill=styled.div`
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

const AvailableSkills = (props) => {
            return(
                <AvailableSkillsContainer>
                    Available Skills
                    {
                        props.skills?.map((skill) => {return <AvailableSkill skill={skill}>{skill.title}</AvailableSkill>})
                    }
                </AvailableSkillsContainer>
            )
}

const LeftContainer = (props) => {


    return (
       <MainContainer>
            <AvailableSkills skills={props.skills}/>
            <Tools changeMode={props.changeMode}/>
       </MainContainer>
    );

}

export default LeftContainer