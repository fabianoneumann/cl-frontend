import { useEffect, useRef, useState } from 'react';
import { z } from 'zod';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSection, RegisterForm, RegisterModalBackground, RegisterModalContainer } from './styles';
import { Form } from '../../Form';

interface RegisterModalProps {
    isRegisterModalOpen: boolean;
    setRegisterModalOpen: (value: boolean) => void;
    setLoginModalOpen: (value: boolean) => void;
}

const registerFormSchema = z.object({
    username: z.string().nonempty({ message: 'Nome de usuário é obrigatório' }),
    email: z.string()
        .nonempty({ message: 'E-mail é obrigatório' })
        .email({ message: 'E-mail inválido'}),
    password: z.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export function RegisterModal({ 
        isRegisterModalOpen, 
        setRegisterModalOpen, 
        setLoginModalOpen 
    }: RegisterModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const registerForm = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema)
    });

    const { handleSubmit, reset } = registerForm;

    const [ output, setOutput ] = useState('');

    function registerUser(data: RegisterFormData) {
        setOutput(JSON.stringify(data, null, 2));
        reset({username: '', email: '', password: ''});
    }

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setRegisterModalOpen(false);
            }
        }

        if (isRegisterModalOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isRegisterModalOpen, setRegisterModalOpen]);

    function handleConnectButtonClick() {
        setRegisterModalOpen(false);
        setLoginModalOpen(true);
    }
    
    if (isRegisterModalOpen) {
        return (
            <RegisterModalBackground>
                <RegisterModalContainer ref={modalRef}>
                    <FormProvider {...registerForm}>
                        <RegisterForm onSubmit={handleSubmit(registerUser)}>
                            <Form.Field>
                                <Form.Label htmlFor="username">Nome de usuário</Form.Label>
                                <Form.Input
                                    type="text"
                                    name="username"
                                    placeholder="Nome de usuário"
                                    autoComplete="username"
                                />
                                <Form.ErrorMessage field="username" />
                            </Form.Field>

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

                            <button type='submit'>Registrar</button>
                        </RegisterForm>
                    </FormProvider>

                    <pre>{output}</pre>

                    <LoginSection>
                        <span>Já possui conta?</span>
                        <button onClick={() => handleConnectButtonClick()}>Conectar</button>
                    </LoginSection>
                </RegisterModalContainer>
            </RegisterModalBackground>
        );
    } else {
        return null;
    }
}