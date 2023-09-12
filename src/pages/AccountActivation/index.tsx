import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AccountActivationContainer } from "./styles";
import { api } from "../../services/api";

export function AccountActivation() {
    //TODO:
    //começar com o loading do AuthContext
    //pegar o token da url e adicionar no header da requisição
    //ao receber ok do servidor para ativação do usuário, exibir mensagem de sucesso e redirecionar

    const { token } = useParams();
                
    useEffect(() => {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        api.get('/users/activate')
            .then(response => {
                if (response.status !== 204) {
                    alert('Erro ao ativar conta!');
                    return;
                }

                localStorage.setItem("token", JSON.stringify(token));
            }
        );
    });

    return(
        <AccountActivationContainer>
            <h1>AccountActivation</h1>
        </AccountActivationContainer>
    );
}