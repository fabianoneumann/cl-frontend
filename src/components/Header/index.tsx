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
import { LoginModal } from "../auth/LoginModal";
import { RegisterModal } from "../auth/RegisterModal";
import { ResetPasswordModal } from "../auth/ResetPasswordModal";

export function Header() {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [isResetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);

    function handleOpenMenu() {
        setisMenuOpen((prevState) => !prevState);
        setLoginModalOpen(false);
        setRegisterModalOpen(false);
        setResetPasswordModalOpen(false);
    }

    function handleHeaderConnectButtonClick() {
        if (isMenuOpen) {
            setisMenuOpen(false);
        }

        setLoginModalOpen(true);
    }

    return (
        <>
            <HeaderCointainer>
                <HeaderContent>
                    <HeaderMenuMobileButton onClick={handleOpenMenu}>
                        { isMenuOpen
                            ? <HeaderXIcon />
                            : <HeaderListIcon />
                        }
                    </HeaderMenuMobileButton>
                    { isMenuOpen && 
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
                    <LoginButton onClick={handleHeaderConnectButtonClick}>Conectar</LoginButton>
                </HeaderContent>
            </HeaderCointainer>
            <LoginModal
                isLoginModalOpen={isLoginModalOpen} 
                setLoginModalOpen={setLoginModalOpen} 
                setRegisterModalOpen={setRegisterModalOpen}
                setResetPasswordModalOpen={setResetPasswordModalOpen}
            />
            <RegisterModal
                isRegisterModalOpen={isRegisterModalOpen}
                setLoginModalOpen={setLoginModalOpen}
                setRegisterModalOpen={setRegisterModalOpen}
            />
            <ResetPasswordModal
                isResetPasswordModalOpen={isResetPasswordModalOpen}
                setResetPasswordModalOpen={setResetPasswordModalOpen}
            />
        </>
    )
}