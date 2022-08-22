import { createGlobalStyle } from "styled-components";
import { MAIN_COLOR } from "../../settings/constants";


const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    .accueil {
        height: 65vh;
        width: 100%;
        background: ${MAIN_COLOR};
    }

    @media screen and (max-width: 450px) {
        .accueil {height: 85vh;}
    }

    .fond-curvy {
        z-index: 0;
        width: 100%;
        position: relative;
        bottom: 5%;
        display: block;
    }
`;

export default GlobalStyle;