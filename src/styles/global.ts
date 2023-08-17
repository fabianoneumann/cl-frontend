import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    :focus {
        outline: 0;
        box-shadow: none;  
    }

    body {
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }
`;