import { useState, useContext, useEffect } from "react";

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
    AuthButton
} from "./styles";
import { LoginModal } from "../auth/LoginModal";
import { RegisterModal } from "../auth/RegisterModal";
import { ResetPasswordModal } from "../auth/ResetPasswordModal";
import { AuthContext } from "../../Context/AuthContext";

export function Header() {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [isResetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);

    const { authenticated, handleLogout } = useContext(AuthContext);

    const [isAuthenticated, setIsAuthenticated] = useState(authenticated);

    useEffect(() => {
        setIsAuthenticated(authenticated);
    }, [authenticated])

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

    function handleHeaderLogoutButtonClick() {
        if (isMenuOpen) {
            setisMenuOpen(false);
        }

        handleLogout();

        setIsAuthenticated(false);
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
                            { isAuthenticated && <NavLink onClick={handleOpenMenu} to="/aulas">Aulas</NavLink> }
                        </HeaderMenuMobile>
                    }
                    <HeaderLogo to="/cl-frontend/">Cripto Lucrativo</HeaderLogo>
                    <HeaderMenu>
                        <NavLink to="/cl-web3-dev">CL Web3 Dev</NavLink>
                        <NavLink to="/boletim-cl">Boletim CL</NavLink>
                        <NavLink to="/livros">Livros</NavLink>
                        <NavLink to="/votos-da-semana">Votos Semanais</NavLink>
                        { isAuthenticated && <NavLink to="/aulas">Aulas</NavLink> }
                    </HeaderMenu>
                    { isAuthenticated
                        ? <AuthButton onClick={handleHeaderLogoutButtonClick}>Sair</AuthButton>
                        : <AuthButton onClick={handleHeaderConnectButtonClick}>Conectar</AuthButton>
                    }
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