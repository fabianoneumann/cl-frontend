import { FooterColumn, FooterContainer, FooterContent, FooterLinksContainer } from "./styles";
import { NavLink } from "react-router-dom";

import logoCL from "../../assets/images/logo-cl.png";
import { DiscordLogo } from "phosphor-react";

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterColumn>
                    <div style={{ borderRadius: 50, overflow: 'hidden', width: "70px"}}>
                        <img style={{width: "70px"}} src={logoCL} alt="creditCardFlags" />
                    </div>
                    <h3>Método Cripto Lucrativo ©</h3>
                    <p>CNPJ: 25.049.417/0001-70</p>
                    <p>Todos os direitos reservados</p>
                    <p>Developed by: Fabiano B. Neumann</p>
                    <NavLink style={{maxWidth: 'fit-content'}} to="https://discord.gg/MaQ5a96dKv" title="Discord"><DiscordLogo size={32} color="cornflowerblue"/></NavLink>
                </FooterColumn>
                <FooterLinksContainer>
                    <FooterColumn>
                        <span>Projetos:</span>
                        <nav>
                            <NavLink to="/" title="Comunidde CL">Comunidade CL</NavLink>
                            <NavLink to="/cl-web3-dev" title="CL Dev Web3">CL Dev Web3</NavLink>
                            <NavLink to="/boletim-cl" title="Boletim CL">Boletim CL</NavLink>
                            <NavLink to="/livros" title="Livros">Livros</NavLink>
                            <NavLink to="/votes-of-the-week" title="Votos da Semana">Votos da Semana</NavLink>
                            <NavLink to="/aulas" title="Aulas">Aulas</NavLink>
                        </nav>
                    </FooterColumn>
                    <FooterColumn>
                        <span>Daniel:</span>
                        <nav>
                            <NavLink to="https://www.youtube.com/@DanielFaouakhiri" title="YouTube" target="_blank">YouTube</NavLink>
                            <NavLink to="https://www.instagram.com/danielfaouakhiri/" title="Instagram" target="_blank">Instagram</NavLink>
                            <NavLink to="https://www.tiktok.com/@danielfaouakhiri" title="TikTok" target="_blank">TikTok</NavLink>
                        </nav>
                    </FooterColumn>
                    <FooterColumn>
                        <span>Fabiano:</span>
                        <nav>
                            <NavLink to="https://www.youtube.com/@fabianoneumann" title="YouTube" target="_blank">YouTube</NavLink>
                            <NavLink to="https://www.instagram.com/fabianoneumann/" title="Instagram" target="_blank">Instagram</NavLink>
                            <NavLink to="https://twitter.com/fabianoneumann" title="Twitter" target="_blank">Twitter</NavLink>
                            <NavLink to="https://www.linkedin.com/in/fabiano-berlinck-neumann-49b39457/" title="Linkedin" target="_blank">Linkedin</NavLink>
                            <NavLink to="https://github.com/fabianoneumann" title="GitHub" target="_blank">GitHub</NavLink>
                        </nav>
                    </FooterColumn>
                </FooterLinksContainer>
            </FooterContent>
        </FooterContainer>
    )
}