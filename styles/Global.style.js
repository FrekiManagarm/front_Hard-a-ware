import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }
    
    html,
    html a,
    h3,
    h4,
    h5,
    h6,
    a,
    p,
    li,
    dl,
    th,
    dt,
    input,
    textarea,
    div {
        //font-family: 'roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        line-height: 1.1em;
    }

    html {
        scroll-behavior: smooth;
    }



`;

export default GlobalStyle;