import { NavLink } from "react-router-dom";
import { HeaderCointainer, HeaderContent, LoginButton } from "./styles";

export function Header() {
    return (
        <HeaderCointainer>
            <HeaderContent>
                <NavLink to="/"
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: '#fff',
                        textShadow: '3px 3px #000'
                    }}>
                        Cripto Lucrativo
                </NavLink>
                <nav>
                    <NavLink to="/cl-web3-dev">CL Web3 Dev</NavLink>
                    <NavLink to="/boletim-cl">Boletim CL</NavLink>
                    <NavLink to="/livros">Livros</NavLink>
                    <NavLink to="/votos-da-semana">Votos Semanais</NavLink>
                    <NavLink to="/aulas">Aulas</NavLink>
                    <NavLink to="/aulas" style={{ display: 'none' }}>Aulas</NavLink>
                </nav>
                <LoginButton to="/login">Entrar</LoginButton>
            </HeaderContent>
        </HeaderCointainer>
    )
}