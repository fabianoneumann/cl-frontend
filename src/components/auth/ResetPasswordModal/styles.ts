import styled from "styled-components";

export const ResetPasswordModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0,0,0, 0.75);
    z-index: 5;
    transition: all 0.5s;
`;

export const ResetPasswordModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    background-color: ${props => props.theme["purple-900"]};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const ResetPasswordForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 18rem;
    gap: 1rem;

    h2 {
        font-size: 1.25rem;
        color: ${props => props.theme.white};
        align-self: center;
        margin-bottom: 1rem;
    }

    button {
        height: 2.375rem;
        background: ${props => props.theme["pink-700"]};
        color: ${props => props.theme.white};
        font-weight: bold;
        padding: 0 1.5rem;
        border: 1px solid ${props => props.theme["pink-700"]};
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover,
        &:focus {
            background: ${props => props.theme["pink-900"]};
        }
    }
`;