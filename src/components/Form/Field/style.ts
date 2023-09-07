import styled from "styled-components";

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    color: ${props => props.theme["gray-300"]};
`;