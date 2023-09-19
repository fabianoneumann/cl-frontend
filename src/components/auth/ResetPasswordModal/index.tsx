import { useEffect, useRef } from "react";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordForm, ResetPasswordModalBackground, ResetPasswordModalContainer } from "./styles";
import { Form } from "../../Form";
import { api } from "../../../services/api";

interface ResetPasswordModalProps {
    isResetPasswordModalOpen: boolean;
    setResetPasswordModalOpen: (value: boolean) => void;
}

const resetPasswordFormSchema = z.object({
    email: z.string()
        .nonempty({ message: 'E-mail é obrigatório' })
        .email({ message: 'E-mail inválido'}),
});

type ResetPasswordFormData = z.infer<typeof resetPasswordFormSchema>;

export function ResetPasswordModal({
    isResetPasswordModalOpen,
    setResetPasswordModalOpen,
}: ResetPasswordModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const resetPasswordForm = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordFormSchema)
    });

    const { handleSubmit, reset } = resetPasswordForm;

    function resetPassword(data: ResetPasswordFormData) {
        const { email } = data;

        api.post('/users/password-reset-request', {
            email,
        }).then(response => {
            console.log(response.data);
            
            if (response.status !== 204) {
                alert('Erro ao solicitar redefinição de senha!');
                return;
            }

            alert('E-mail de redefinição de senha enviado com sucesso!');
            setResetPasswordModalOpen(false);
        }).catch(error => {
            alert('Erro ao solicitar redefinição de senha: ' + error.response.data.message);
        });

        reset({email: ''});
    }

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setResetPasswordModalOpen(false);
            }
        }

        if (isResetPasswordModalOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isResetPasswordModalOpen, setResetPasswordModalOpen]);

    if (isResetPasswordModalOpen) {
        return (
            <ResetPasswordModalBackground>
                <ResetPasswordModalContainer ref={modalRef}>
                    <FormProvider {...resetPasswordForm}>
                        <ResetPasswordForm onSubmit={handleSubmit(resetPassword)}>
                            <Form.Field>
                                <h2>Esqueci minha senha</h2>
                                <Form.Label htmlFor="email">E-mail</Form.Label>
                                <Form.Input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    autoComplete="email"
                                />
                                <Form.ErrorMessage field="email" />
                            </Form.Field>

                            <button type="submit">Enviar e-mail</button>
                        </ResetPasswordForm>
                    </FormProvider>
                </ResetPasswordModalContainer>
            </ResetPasswordModalBackground>
        )
    } else {
        return null;
    }
}