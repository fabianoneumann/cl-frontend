import styled from "styled-components";

export const ResetPasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 68vh;
`;

export const ResetPasswordForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background-color: ${props => props.theme["gray-950"]};
    padding: 2rem;
    border-radius: 6px;

    h2 {
        font-size: 1.5rem;
        text-align: center;
        color: ${props => props.theme["gray-300"]};
    }

    button {
        height: 2.375rem;
        background: ${props => props.theme["pink-700"]};
        color: ${props => props.theme.white};
        font-weight: bold;
        border: 1px solid ${props => props.theme["pink-700"]};
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover,
        &:focus {
            background: ${props => props.theme["pink-900"]};
        }
    }

    span {
        color: ${props => props.theme["red-300"]};
        align-self: center;
    }
`;