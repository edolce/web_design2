import CapsulaFONT from '../fonts/Capsuula.ttf';
import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'Capsula';
        src: local('Capsula'), local('Capsula'),
        url(${CapsulaFONT}) format('woff2'),
        url(${CapsulaFONT}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;