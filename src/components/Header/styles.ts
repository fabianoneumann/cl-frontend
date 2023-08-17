import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderCointainer = styled.header`
    background: ${props => props.theme["purple-900"]};
    border-bottom: 1px solid ${props => props.theme["purple-500"]};
    position: fixed;
    width: 100%;
    height: 5.125rem;
    display: flex;
    align-items: center;
`;

export const HeaderContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        gap: 2rem;
        height: 100%;

        a {
            text-decoration: none;
            padding: 1.75rem 0;
            height: 100%;
            background: ${props => props.theme["purple-900"]};
            color: ${props => props.theme["gray-400"]};
            cursor: pointer;
            transition: all 0.3s;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover,
            &:focus,
            &:active {
                color: ${props => props.theme.white};
                border-bottom: 2.5px solid ${props => props.theme["pink-700"]};
            }
        }
    }
`;

export const LoginButton = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 2.375rem;
    background: ${props => props.theme["purple-900"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.5rem;
    border: 1px solid ${props => props.theme["pink-700"]};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    

    &:hover,
    &:focus {
        background: ${props => props.theme["pink-700"]};
    }
`;