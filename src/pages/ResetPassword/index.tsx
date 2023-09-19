import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { ResetPasswordContainer, ResetPasswordForm } from "./styles";
import { useEffect, useState } from "react";
import { Form } from "../../components/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const resetPasswordFormSchema = z.object({
    password: z.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres'),
    passwordConfirmation: z.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
});

type resetPasswordFormData = z.infer<typeof resetPasswordFormSchema>;

export function ResetPassword() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const navigate = useNavigate();

    useEffect(() => {
        //TODO: Adicionar timer com ícone em movimento ou alguma animação
        api.defaults.headers.Authorization = `Bearer ${token}`;
    });
    
    const  resetPasswordForm = useForm<resetPasswordFormData>({
        resolver: zodResolver(resetPasswordFormSchema)
    });

    const { handleSubmit, reset } = resetPasswordForm;

    const [ error, setError ] = useState('');

    async function resetPassword(data: resetPasswordFormData) {
        const { password, passwordConfirmation } = data;
    
        if (password !== passwordConfirmation) {
            setError('As senhas não coincidem!');
            return;
        } else {
            setError('');
        }

        api.patch('/users/reset-password',{
            password,
        })
            .then(response => {
                if (response.status !== 204) {
                    alert('Erro ao ativar conta!');
                    return;
                }
                
                //TODO: Adicionar mensagem de sucesso em toast e
                // adicionar timer com ícone em movimento ou alguma animação para sucesso
                alert('Senha alterada com sucesso!');
                navigate('/');
            }).catch(error => {
                alert('Erro ao ativar conta: ' + error.message);
            });
    
        //copirado de register user, trocar para reset password
        // await api.post('users', {
        //     username,
        //     email,
        //     password,
        // }).then(response => {
        //     if (response.status !== 201) {
        //         alert('Erro ao registrar usuário!');
        //         return;
        //     }
    
        //     setRegisterModalOpen(false);
        //     setError('');
        //     reset({username: '', email: '', password: ''});
        //     navigate('/users/activate-your-account');
        // }).catch(error => {
        //     setError(error.response.data.message);
        // });
    
        reset({password: '', passwordConfirmation: ''});
    }

    return (
        <ResetPasswordContainer>
            <FormProvider {...resetPasswordForm}>
                <ResetPasswordForm onSubmit={handleSubmit(resetPassword)}>
                    <h2>Redefinição de senha</h2>
                    {error && <span>{error}</span>}
                    <Form.Field>
                        <Form.Label htmlFor="password">Senha</Form.Label>
                        <Form.Input
                            type="password"
                            name="password"
                            placeholder="Senha"
                            autoComplete="off"
                            onChange={() => {setError('')}}
                        />
                        <Form.ErrorMessage field="password" />
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="passwordConfirmation">Confirme a Senha</Form.Label>
                        <Form.Input
                            type="password"
                            name="passwordConfirmation"
                            placeholder="Confirme a Senha"
                            autoComplete="off"
                            onChange={() => {setError('')}}
                        />
                        <Form.ErrorMessage field="passwordConfirmation" />
                    </Form.Field>

                    <button type='submit'>Trocar a senha</button>
                </ResetPasswordForm>  
            </FormProvider>
            
        </ResetPasswordContainer>
    );
}

// referência de tela:
// https://codepen.io/JacobLett/pen/obqXMZ