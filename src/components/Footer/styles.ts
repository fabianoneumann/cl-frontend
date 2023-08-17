import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    background: ${props => props.theme["gray-800"]};
    color: ${props => props.theme["white"]};
    padding: 5rem 0;

    display: flex;
    justify-content: center;
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    width: 100%;
    max-width: 1440px;
    gap: 2rem;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: fit-content;
    margin: 0 2rem;
    gap: 0.75rem;

    nav {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        a {
            color: ${props => props.theme["gray-400"]};
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            text-decoration: none;
            max-width: fit-content;

            &:hover,
            &:focus {
                border-bottom: 2.5px solid ${props => props.theme["pink-800"]};
                color: ${props => props.theme["pink-700"]};
                transform: scale(1.2);
            }
        }
    }
`;