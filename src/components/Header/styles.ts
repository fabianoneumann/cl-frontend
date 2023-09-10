import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { List, X } from "phosphor-react";

export const HeaderCointainer = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 5.125rem;
    background: ${props => props.theme["purple-900"]};
    border-bottom: 1px solid ${props => props.theme["purple-500"]};
    z-index: 2;
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

    @media (max-width: 900px) {
        justify-content: end;
    }
`;

export const HeaderLogo = styled(NavLink)`
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.white};
    text-shadow: 3px 3px #000;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const HeaderMenu = styled.div`
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

    @media (max-width: 900px) {
        display: none;
    }
`;

export const AuthButton = styled.div`
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

export const HeaderMenuMobile = styled.div`
    display: none;
    position: absolute;
    top: 5.125rem;
    left: 0;
    width: 100%;
    
    background: ${props => props.theme["purple-900"]};
    z-index: 3;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;

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
            &:focus {
                color: ${props => props.theme.white};
                border-bottom: 2.5px solid ${props => props.theme["pink-700"]};
            }
        }
    }
`;

export const HeaderMenuMobileButton = styled.button`
    display: none;

    @media (max-width: 900px) {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 5.125rem;
        height: 5.125rem;
        background: ${props => props.theme["purple-900"]};
        cursor: pointer;
        border: none;
        border-bottom: 1px solid ${props => props.theme["purple-500"]};
        transition: all 0.3s;

        &:hover,
        &:focus {
            background: ${props => props.theme["pink-700"]};
        }

        svg {
            color: ${props => props.theme.white};
            font-size: 2rem;
        }
    }
`;

export const HeaderListIcon = styled(List)`
    color: ${props => props.theme.white};
    font-size: 2rem;
`;

export const HeaderXIcon = styled(X)`
    color: ${props => props.theme.white};
    font-size: 2rem;
`;
