import {Component} from 'react';
import styled from 'styled-components';
import MiddleContainerA4 from "./Middle/MiddleContainerA4";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import MinimalBlocks from "./HTML-BLOCKS/MinimalBlocks";

// const ExampleStyledButton = styled.button`
//           background-color: blue;
//           color: white;
//           font-size: 16px;
//           padding: 10px 20px;
//         `;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const SkillType = {
    MAIN: "main",
    SKILL: "skill",
    PORTFOLIO: "portfolio",
};

const requiredState = {
    [SkillType.MAIN]: ["title", "subtitle", "image", "description"],
    [SkillType.SKILL]: ["title", "subtitle", "image", "description", "value", "value_max", "value_name", "value_unit", "link", "icon"],
    [SkillType.PORTFOLIO]: ["title", "subtitle", "image", "description", "link", "icon"],
}

const requiredSkillArguments = {
    [SkillType.MAIN]: ["title", "image", "description"],
    [SkillType.SKILL]: ["title"],
    [SkillType.PORTFOLIO]: ["title"],
};

const availableHtmlBlockModels = {
    [SkillType.MAIN]: [
        {
            title: "Minimal block - MAIN (33*100)",
            subtype: "minimal",
            htmlBlock: (infos) => (<MinimalBlocks code={0} infos={infos}/>),
            description: "Minimal block - Tipo MAIN, ottimizzato per blocco (33*100)"
        },
        {
            title: "Minimal block - MAIN TIPO 2 (33*100)",
            subtype: "minimal",
            htmlBlock: (infos) => (<MinimalBlocks code={2} infos={infos}/>),
            description: "Minimal block - Tipo MAIN seconda variante, ottimizzato per blocco (33*100)"
        },
        {
            title: "Minimal block - MAIN TIPO 2 (33*50)",
            subtype: "minimal",
            htmlBlock: (infos) => (<MinimalBlocks code={4} infos={infos}/>),
            description: "Minimal block - Tipo MAIN seconda variante, ottimizzato per blocco (33*50)"
        },
    ],
    [SkillType.SKILL]: [
        {
            title: "Minimal block - SKILL (33*100)",
            subtype: "minimal",
            htmlBlock: (infos) => (<MinimalBlocks code={1} infos={infos}/>),
            description: "Minimal block - Tipo SKILL, ottimizzato per blocco (33*100)"
        },
        {
            title: "Minimal block - SKILL (25*25)",
            subtype: "minimal",
            htmlBlock: (infos) => (<MinimalBlocks code={3} infos={infos}/>),
            description: "Minimal block - Tipo SKILL, ottimizzato per blocco (25*25)"
        },{
            title: "Minimal block - SKILL (25*25)",
            subtype: "minimal",
            htmlBlock: (infos) => (<MinimalBlocks code={5} infos={infos}/>),
            description: "Minimal block - Tipo SKILL, ottimizzato per blocco (66*25)"
        },{
            title: "Minimal block - SKILL (66*25|66*50|66*75|50*25|50*50|50*75|33*25|33*50|33*75)",
            subtype: "minimal",
            htmlBlock: (infos) => (<MinimalBlocks code={6} infos={infos}/>),
            description: "Minimal block - Tipo SKILL, ottimizzato per blocco (66*25)"
        },{
            title: "[0007]-Minimal block - SKILL (66*25|66*50|66*75|50*25|50*50|50*75|33*25|33*50|33*75)",
            subtype: "minimal",
            htmlBlock: (infos) => (<MinimalBlocks code={7} infos={infos}/>),
            description: "Minimal block - Tipo SKILL, ottimizzato per blocco (66*25)"
        }
    ],
    [SkillType.PORTFOLIO]: []
}

class CreateCvPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: "division",
            placedBlocks: [
                {
                    placedBlockID: 0,
                    blockPositionID: 2,
                    blockHtml: <MinimalBlocks code={1} infos={{
                        title: "Diploma di maturità scientifica",
                        description: "Liceo Scientifico Statale “G. D. Cassini” - Genova " +
                            "Indirizzo: PNI (Piano Nazionale Informatica) " +
                            "Votazione: 100/100" +
                            "Anno di conseguimento: 2016" +
                            "Tesi: “Sviluppo di un’applicazione per la gestione di un magazzino”" +
                            "Linguaggi utilizzati: Java, XML, SQL" +
                            "Sistema operativo: Android"
                    }

                    }/>
                }
            ],
            blocks: [
                {
                    blockID: 0,
                    type: SkillType.MAIN,
                    multiBlock: false,
                    skillsID: [0],
                    blockTitle: "Main BLock",
                    blockDescription: "Main Block Description",
                    displayTitle: "EDOARDO GUANI",
                    displaySubtitle: "ENGINEER",
                },
                {
                    blockID: 1,
                    type: SkillType.SKILL,
                    multiBlock: true,
                    skillsID: [1, 3],
                    blockTitle: "Main BLock",
                    blockDescription: "Main Block Description",
                    displayTitle: "EDOARDO GUANI",
                    displaySubtitle: "ENGINEER",
                },
                {
                    blockID: 2,
                    type: SkillType.PORTFOLIO,
                    multiBlock: true,
                    skillsID: [2, 4],
                    blockTitle: "Main BLock",
                    blockDescription: "Main Block Description",
                    displayTitle: "EDOARDO GUANI",
                    displaySubtitle: "ENGINEER",
                },
                {
                    blockID: 3,
                    type: SkillType.SKILL,
                    multiBlock: false,
                    skillsID: [1],
                    blockTitle: "Main BLock",
                    blockDescription: "Main Block Description",
                    displayTitle: "EDOARDO GUANI",
                    displaySubtitle: "ENGINEER",
                },
                {
                    blockID: 4,
                    type: SkillType.PORTFOLIO,
                    multiBlock: false,
                    skillsID: [2],
                    blockTitle: "Main BLock",
                    blockDescription: "Main Block Description",
                    displayTitle: "EDOARDO GUANI",
                    displaySubtitle: "ENGINEER",
                }
            ],
            skills: [
                {
                    id: 0,
                    type: SkillType.MAIN,
                    title: "Edoardo Guani",
                    subtitle: "Engineer",
                    image: "https://img.icons8.com/ios/50/000000/html-5.png",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
                },
                {
                    id: 1,
                    type: SkillType.SKILL,
                    title: "CSS",
                    subtitle: "Advanced",
                    image: "https://img.icons8.com/ios/50/000000/css3.png",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
                    value: 0,
                    value_max: 100,
                    value_name: "Progress",
                    value_unit: "%",
                    link: "https://www.w3schools.com/css/",
                    icon: "https://img.icons8.com/ios/50/000000/css3.png",
                },
                {
                    id: 2,
                    type: SkillType.PORTFOLIO,
                    title: "Portfolio",
                    subtitle: "Advanced",
                    image: "https://img.icons8.com/ios/50/000000/css3.png",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
                    link: "https://www.w3schools.com/css/",
                    icon: "https://img.icons8.com/ios/50/000000/css3.png",
                },
                {
                    id: 3,
                    type: SkillType.SKILL,
                    title: "CSS",
                    subtitle: "Advanced",
                    image: "https://img.icons8.com/ios/50/000000/css3.png",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
                    value: 0,
                    value_max: 100,
                    value_name: "Progress",
                    value_unit: "%",
                    link: "https://www.w3schools.com/css/",
                    icon: "https://img.icons8.com/ios/50/000000/css3.png",
                },
                {
                    id: 4,
                    type: SkillType.PORTFOLIO,
                    title: "Portfolio",
                    subtitle: "Advanced",
                    image: "https://img.icons8.com/ios/50/000000/css3.png",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
                    link: "https://www.w3schools.com/css/",
                    icon: "https://img.icons8.com/ios/50/000000/css3.png",
                },
                {
                    id: 5,
                    type: SkillType.SKILL,
                    title: "CSS",
                    subtitle: "Advanced",
                    image: "https://img.icons8.com/ios/50/000000/css3.png",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam luctus, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
                    value: 0,
                    value_max: 100,
                    value_name: "Progress",
                    value_unit: "%",
                    link: "https://www.w3schools.com/css/",
                    icon: "https://img.icons8.com/ios/50/000000/css3.png",
                },
                {
                    id: 6,
                    type: SkillType.MAIN,
                    title: "Edoardo Guani GIOUSE",
                    subtitle: "Engineer",
                    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    description: "L'ingegnere informatico di Genova è un professionista altamente qualificato che ha acquisito una solida formazione teorica e pratica nel campo dell'informatica, con competenze in diverse aree."
                }


            ]
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
    }

    addPlacedBlock = (blockPositionID, htmlBlock) => {
        //check if a block with the same id is already placed
        if (this.state.placedBlocks.filter(block => block.blockPositionID === blockPositionID).length === 0) {
            this.setState({
                placedBlocks: [...this.state.placedBlocks, {
                    blockID: this.state.placedBlocks.length,
                    blockPositionID: blockPositionID,
                    blockHtml: htmlBlock
                }]
            })
        } else {
            //replace the block with the same id
            this.setState({
                placedBlocks: this.state.placedBlocks.map(block => {
                        if (block.blockPositionID === blockPositionID) {
                            return {
                                blockID: block.blockID,
                                blockPositionID: blockPositionID,
                                blockHtml: htmlBlock
                            }
                        } else {
                            return block
                        }
                    }
                )
            })
        }
    }


    render() {
        return (
            <MainContainer>
                <LeftContainer skills={this.state.skills} changeMode={(mode) => this.setState({mode})}/>
                <MiddleContainerA4
                    mode={this.state.mode}
                    skills={this.state.skills}
                    blocksPlaced={this.state.placedBlocks}
                    addPlacedBlock={(block, htmlBlock) => this.addPlacedBlock(block, htmlBlock)}
                    availableModels={availableHtmlBlockModels}
                />
                <RightContainer blocks={this.state.blocks}/>
            </MainContainer>
        )
    }
}

export default CreateCvPage