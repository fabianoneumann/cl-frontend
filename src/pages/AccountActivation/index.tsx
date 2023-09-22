import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountActivationContainer, AccountActivationSubtitle, AccountActivationTitle } from "./styles";
import { api } from "../../services/api";
import { AuthContext } from "../../Context/AuthContext";

export function AccountActivation() {
    //TODO:
    //começar com o loading do AuthContext
    //pegar o token da url e adicionar no header da requisição
    //ao receber ok do servidor para ativação do usuário, exibir mensagem de sucesso e redirecionar

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const { setAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    const [isAccountActivated, setAccountActivated] = useState(false);

    useEffect(() => {
        //TODO: Adicionar timer com ícone em movimento ou alguma animação

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setTimeout(() => {
            api.get('/users/activate')
                .then(response => {
                    if (response.status !== 204) {
                        alert('Erro ao ativar conta!');
                        return;
                    }

                    // No cookie token set - just to make user vote since it's a new account.
                    localStorage.setItem("token", JSON.stringify(token));

                    setAccountActivated(true);
                }).catch(() => {
                    alert('Seu link de ativação expirou! Por favor, tente se conectar para receber um novo link de ativação.');
                    navigate('/');
                });
        }, 2000);
    }, [token, navigate, setAuthenticated]);

    return(
        <AccountActivationContainer>
            { !isAccountActivated && 
                <AccountActivationTitle>Ativando sua conta...</AccountActivationTitle>
            }
            { isAccountActivated && 
                <>
                    <AccountActivationTitle>Conta ativada com sucesso!</AccountActivationTitle>
                    <AccountActivationSubtitle>Por favor, conecte-se para continuar</AccountActivationSubtitle>
                </>
            }
        </AccountActivationContainer>
    );
}