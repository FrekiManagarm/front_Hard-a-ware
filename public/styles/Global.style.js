import { createGlobalStyle } from "styled-components";
import { MAIN_COLOR } from "../../settings/constants";


const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Baloo Da 2', cursive;
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
        position: relative;
        top: 42rem;
    } 
`;

export default GlobalStyle;