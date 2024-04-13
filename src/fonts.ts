import { createGlobalStyle } from "styled-components"

import TungstenBoldWoff from "./assets/fonts/Tungsten-Bold.woff"
import TungstenBoldWoff2 from "./assets/fonts/Tungsten-Bold.woff2"
import TungstenSemiBoldWoff from "./assets/fonts/Tungsten-Semibold.woff"
import TungstenSemiBoldWoff2 from "./assets/fonts/Tungsten-Semibold.woff2"

export default createGlobalStyle`
    @font-face {
        font-family: 'Tungsten';
        src: local('Tungsten'), local('Tungsten'),
        url(${TungstenBoldWoff2}) format('woff2'),
        url(${TungstenBoldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Tungsten';
        src: local('Tungsten'), local('Tungsten'),
        url(${TungstenSemiBoldWoff2}) format('woff2'),
        url(${TungstenSemiBoldWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`
