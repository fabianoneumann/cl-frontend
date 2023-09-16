import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme["gray-950"]};
        color: ${props => props.theme["gray-300"]};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["gray-500"]};
        }

        &::-webkit-search-cancel-button {
            cursor: pointer;
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        padding: 1rem;
        border: 1px solid ${props => props.theme["gray-500"]};
        background: ${props => props.theme["gray-600"]};
        color: ${props => props.theme.white};
        font-weight: bold;
        border-radius: 6px;
        cursor: not-allowed;

        transition: background-color 0.2s, color 0.2s, border-color 0.2s;

        &:hover {
            background: transparent;
            color: ${props => props.theme["gray-500"]};
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        
        button {
            display: none;
        }
    }
`;