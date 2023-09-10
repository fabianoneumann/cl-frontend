import { useEffect, useRef, useContext } from "react";
import { LoginModalBackground, LoginModalContainer, LoginForm, RegisterSection } from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from "../../Form";
import { AuthContext } from "../../../Context/AuthContext";

interface LoginModalProps {
    isLoginModalOpen: boolean;
    setLoginModalOpen: (value: boolean) => void;
    setRegisterModalOpen: (value: boolean) => void;
    setResetPasswordModalOpen: (value: boolean) => void;
}

const loginFormSchema = z.object({
    email: z.string()
        .nonempty({ message: 'E-mail é obrigatório' })
        .email({ message: 'E-mail inválido'}),
    password: z.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export function LoginModal({ 
        isLoginModalOpen,
        setLoginModalOpen,
        setRegisterModalOpen,
        setResetPasswordModalOpen,
    }: LoginModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    
    const loginForm = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema)
    });

    const { handleSubmit } = loginForm;

    const { handleLogin } = useContext(AuthContext);

    async function authenticateUser({ email, password }: LoginFormData) {
        await handleLogin(email, password);
        //handleLogin function should call redirect inside it if needed, so no need to call it here
        setLoginModalOpen(false);
    }

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setLoginModalOpen(false);
            }
        }

        if (isLoginModalOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isLoginModalOpen, setLoginModalOpen]);
    
    function handleRegisterButtonClick() {
        setLoginModalOpen(false);
        setRegisterModalOpen(true);
    }

    function handleResetPasswordLinkClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setLoginModalOpen(false);
        setResetPasswordModalOpen(true);
    }
    
    if (isLoginModalOpen) {
        return (
            <LoginModalBackground>
                <LoginModalContainer ref={modalRef}>
                    <FormProvider {...loginForm}>
                        <LoginForm onSubmit={handleSubmit(authenticateUser)}>
                            <Form.Field>
                                <Form.Label htmlFor="email">E-mail</Form.Label>
                                <Form.Input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    autoComplete="email"
                                />
                                <Form.ErrorMessage field="email" />
                            </Form.Field>

                            <Form.Field>
                                <Form.Label htmlFor="password">Senha</Form.Label>
                                <Form.Input
                                    type="password"
                                    name="password"
                                    placeholder="Senha"
                                    autoComplete="off"
                                />
                                <Form.ErrorMessage field="password" />
                            </Form.Field>

                            <button type="submit">Conectar</button>

                            <a href="#" onClick={(event) => handleResetPasswordLinkClick(event)}>
                                Esqueci minha senha
                            </a> 
                        </LoginForm>
                    </FormProvider>

                    <RegisterSection>
                        <span>Não possui conta?</span>
                        <button onClick={() => handleRegisterButtonClick()}>
                            Cadastrar
                        </button>
                    </RegisterSection>
                </LoginModalContainer>
            </LoginModalBackground>
        )
    } else {
        return null;
    }
}