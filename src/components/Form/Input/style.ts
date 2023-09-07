import styled from "styled-components";

export const FormInput = styled.input `
    border: 1px solid ${props => props.theme["gray-700"]};
    box-shadow: 0 0 0 0.6px ${props => props.theme["gray-950"]};
    border-radius: 3px;
    padding: 0.5rem;
    font-size: small;
    background-color: ${props => props.theme["gray-300"]};
`;