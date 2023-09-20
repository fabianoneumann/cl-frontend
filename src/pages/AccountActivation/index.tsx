import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountActivationContainer } from "./styles";
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

    useEffect(() => {
        //TODO: Adicionar timer com ícone em movimento ou alguma animação

        api.defaults.headers.Authorization = `Bearer ${token}`;

        //TODO: ADD REFRESH TOKEN LOGIC
        api.get('/users/activate')
            .then(response => {
                if (response.status !== 204) {
                    alert('Erro ao ativar conta!');
                    return;
                }

                //TODO: Adicionar o token do cookie da resposta no cookie do navegador
                // Cookies.set('refreshToken', response.headers['refreshToken'], { expires: refreshToken.sign.expiresIn });

                localStorage.setItem("token", JSON.stringify(token));
                setAuthenticated(true);
                //TODO: Adicionar mensagem de sucesso em toast e
                // adicionar timer com ícone em movimento ou alguma animação para sucesso
                navigate('/votes-of-the-week');
            }).catch(() => {
                alert('Seu link de ativação expirou! Por favor, tente se conectar para receber um novo link de ativação.');
                navigate('/');
            });
    }, [token, navigate, setAuthenticated]);

    return(
        <AccountActivationContainer>
            <h1>Ativando sua conta...</h1>
        </AccountActivationContainer>
    );
}