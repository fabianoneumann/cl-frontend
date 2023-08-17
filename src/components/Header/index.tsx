import { useState } from "react";

import { NavLink } from "react-router-dom";
import { 
    HeaderCointainer, 
    HeaderContent,
    HeaderListIcon,
    HeaderLogo,
    HeaderMenu,
    HeaderMenuMobile,
    HeaderMenuMobileButton,
    HeaderXIcon,
    LoginButton
} from "./styles";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenMenu() {
        setIsOpen((prevState) => !prevState);
    }

    function handleLoginClick() {
        console.log('Login');
        if (isOpen) {
            setIsOpen(false);
        }
    }

    return (
        <HeaderCointainer>
            <HeaderContent>
                <HeaderMenuMobileButton onClick={handleOpenMenu}>
                    { isOpen
                        ? <HeaderXIcon />
                        : <HeaderListIcon />
                    }
                </HeaderMenuMobileButton>
                { isOpen && 
                    <HeaderMenuMobile>
                        <NavLink onClick={handleOpenMenu} to="/cl-frontend/">Cripto Lucrativo</NavLink>
                        <NavLink onClick={handleOpenMenu} to="/cl-web3-dev">CL Web3 Dev</NavLink>
                        <NavLink onClick={handleOpenMenu} to="/boletim-cl">Boletim CL</NavLink>
                        <NavLink onClick={handleOpenMenu} to="/livros">Livros</NavLink>
                        <NavLink onClick={handleOpenMenu} to="/votos-da-semana">Votos Semanais</NavLink>
                        <NavLink onClick={handleOpenMenu} to="/aulas">Aulas</NavLink>
                    </HeaderMenuMobile>
                }
                <HeaderLogo to="/cl-frontend/">Cripto Lucrativo</HeaderLogo>
                <HeaderMenu>
                    <NavLink to="/cl-web3-dev">CL Web3 Dev</NavLink>
                    <NavLink to="/boletim-cl">Boletim CL</NavLink>
                    <NavLink to="/livros">Livros</NavLink>
                    <NavLink to="/votos-da-semana">Votos Semanais</NavLink>
                    <NavLink to="/aulas">Aulas</NavLink>
                    <NavLink to="/aulas" style={{ display: 'none' }}>Aulas</NavLink>
                </HeaderMenu>
                <LoginButton to="/cl-frontend/" onClick={handleLoginClick}>Entrar</LoginButton>
            </HeaderContent>
        </HeaderCointainer>
    )
}