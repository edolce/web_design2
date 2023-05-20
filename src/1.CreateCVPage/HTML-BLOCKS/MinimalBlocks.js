import styled from "styled-components";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import SkillBlock from "./Minimal Blocks/Code0001";
import SkillBlock2 from "./Minimal Blocks/Code0002";
import Code0003 from "./Minimal Blocks/Code0003";
import Code0004 from "./Minimal Blocks/Code0004";
import Code0007 from "./Minimal Blocks/Code0007";



const MainBlock25x50_subtitle = (props) => {

    const Container = styled.div`
      width: 100%;
      height: 100%;
      background-color: #000000;
    `;

    const Image = styled.div`
      width: 100%;
      height: 50%;
      background-color: #1325;
      overflow: hidden;

      img {
        width: 100%;
      }
    `;

    const InfoContainer = styled.div`
      width: 80%;
      height: 40%;
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 10%;

      .info {
        text-align: justify;
        text-wrap: revert;
        display: grid;
        place-items: flex-start;
        font-family: "capsula", serif;
      }
    `;

    const Title = styled.div`
      width: 100%;
      height: 15%;
      font-size: 30px;
      padding: 0;
      margin: 0;
      span{
        color: white;
        white-space: nowrap;
        text-align: left;
      }
    `;

    const Subtitle = styled.div`
      color: #b05730;
      position: relative;
      transform: translate(0, -50%);
      font-size: 13px;
      padding: 0;
    `;

    const Description = styled.div`
      color: #a6a6a6;
      font-size: 16.5px;
    `;

    // const infos = {
    //     title: "Edoardo Guani GIOUSE",
    //     subtitle: "Engineer",
    //     image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     description: "L'ingegnere informatico di Genova è un professionista altamente qualificato che ha acquisito una solida formazione teorica e pratica nel campo dell'informatica, con competenze in diverse aree."
    // }

    const infos = props.infos;


    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [fontSize, setFontSize] = useState(40);
    const [visibilityStatus, setVisibility] = useState("hidden");


    console.log("font",fontSize);
    const calculateFontSize = () => {
        const container = containerRef.current;
        const text = textRef.current;

        if (container.clientWidth/text.scrollWidth < 1){
            setFontSize(fontSize*container.clientWidth/text.scrollWidth);
            console.log("resized");
        }
        setVisibility("visible")
    }

    useEffect(() => {
        window.addEventListener("resize", ()=>{
            setFontSize(40);const timeoutId = setTimeout(() => {
                calculateFontSize();
                setVisibility("visible")
        }, 100);
        return () => clearTimeout(timeoutId);});
        const timeoutId = setTimeout(() => {
            calculateFontSize();
            setVisibility("visible")
        }, 100);
        return () => clearTimeout(timeoutId);
    }, []);



    return (
        <Container>
            <Image>
                <img src={infos.image} alt={""}/>
            </Image>
            <InfoContainer>
                <Title className={"info"} ref={containerRef}>
                    <span ref={textRef} style={{fontSize:`${fontSize}px`, visibility:visibilityStatus}}>{infos.title}</span>
                </Title>
                <Subtitle className={"info"}>{infos.subtitle}</Subtitle>
                <Description className={"info"}>{infos.description}</Description>
            </InfoContainer>
        </Container>
    )
}

const MainBlock25x50 = (props) => {

    const Container = styled.div`
      width: 100%;
      height: 100%;
      background-color: #9a0000;
    `;

    const Image = styled.div`
      width: 100%;
      height: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
    `;

    const InfoContainer = styled.div`
      width: 80%;
      height: 40%;
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 10%;

      .info {
        text-align: justify;
        text-wrap: revert;
        display: grid;
        place-items: flex-start;
        font-family: "capsula", serif;
      }
    `;

    const Title = styled.div`
      width: 100%;
      height: 15%;
      font-size: 30px;
      padding: 0;
      margin: 0;

      span {
        color: #9d0000;
        white-space: nowrap;
        text-align: left;
      }
    `;

    const Subtitle = styled.div`
      color: #9d9d9d;
      position: relative;
      transform: translate(0, -50%);
      font-size: 13px;
      padding: 0;
    `;

    const Description = styled.div`
      color: #6ec3ff;
      font-size: 16.5px;
    `;

    // const infos = {
    //     title: "Edoardo Guani GIOUSE",
    //     subtitle: "Engineer",
    //     image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     description: "L'ingegnere informatico di Genova è un professionista altamente qualificato che ha acquisito una solida formazione teorica e pratica nel campo dell'informatica, con competenze in diverse aree."
    // }

    const infos = props.infos;


    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [fontSize, setFontSize] = useState(40);
    const [visibilityStatus, setVisibility] = useState("hidden");


    console.log("font",fontSize);
    const calculateFontSize = () => {
        const container = containerRef.current;
        const text = textRef.current;

        if (container.clientWidth/text.scrollWidth < 1){
            setFontSize(fontSize*container.clientWidth/text.scrollWidth);
            console.log("resized");
        }
        setVisibility("visible")
    }

    useEffect(() => {
        window.addEventListener("resize", ()=>{
            setFontSize(40);const timeoutId = setTimeout(() => {
                calculateFontSize();
                setVisibility("visible")
        }, 100);
        return () => clearTimeout(timeoutId);});
        const timeoutId = setTimeout(() => {
            calculateFontSize();
            setVisibility("visible")
        }, 100);
        return () => clearTimeout(timeoutId);
    }, []);



    return (
        <Container>
            <Image>
                <img src={infos.image} alt={""}/>
            </Image>
            <InfoContainer>
                <Title className={"info"} ref={containerRef}>
                    <span ref={textRef} style={{fontSize:`${fontSize}px`, visibility:visibilityStatus}}>{infos.title}</span>
                </Title>
                <Subtitle className={"info"}>{infos.subtitle}</Subtitle>
                <Description className={"info"}>{infos.description}</Description>
            </InfoContainer>
        </Container>
    )
}

const SkillBlock25x50_description = (props) => {

    const Container = styled.div`
        width: 100%;
        height: 100%;
        background-color: #000000;
    `;

    const Title = styled.div`
        width: 100%;
        font-size: 18px;
        padding: 0;
        margin: 0;

      color: #b05730;
        text-align: left;
        span{
            white-space: nowrap;
            text-align: left;
        }
    `;

    const Description = styled.div`
        color: #a6a6a6;
        font-size: 14px;
      text-align: justify;
    `;

    const InfoContainer = styled.div`
        width: 90%;
        height: 40%;
        padding-top: 5%;
        padding-left: 5%;
        padding-right: 5%;
        font-family: "capsula", serif;
    `;

    // const infos = {
    //     title: "Diploma di maturità scientifica",
    //     description: "Liceo Scientifico Statale “G. D. Cassini” - Genova " +
    //         "Indirizzo: PNI (Piano Nazionale Informatica) " +
    //         "Votazione: 100/100"+
    //         "Anno di conseguimento: 2016"+
    //         "Tesi: “Sviluppo di un’applicazione per la gestione di un magazzino”"+
    //         "Linguaggi utilizzati: Java, XML, SQL"+
    //         "Sistema operativo: Android"
    // }

    const infos = props.infos;

    return (
    <Container>
        <InfoContainer>
            <Title>
                <span>{infos.title}</span>
            </Title>
            <Description>{infos.description}</Description>
        </InfoContainer>
    </Container>
        )

}



let index = 0;



const MinimalBlocks = (props) => {
    if (props.code === 0){
        return <MainBlock25x50_subtitle infos={props.infos}/>
    }
    if (props.code === 1){
        return <SkillBlock25x50_description infos={props.infos}/>
    }
    if (props.code === 2){
        return <MainBlock25x50 infos={props.infos}/>
    }
    if (props.code === 3){
        return <SkillBlock infos={props.infos}/>
    }
    if (props.code === 4){
        return <SkillBlock2 infos={props.infos}/>
    }
    if (props.code === 5){
        return <Code0003 infos={props.infos}/>
    }
    if (props.code === 6){
        return <Code0004 infos={props.infos}/>
    }
    if (props.code === 7){
        return <Code0007 infos={props.infos}/>
    }
}




export default MinimalBlocks;