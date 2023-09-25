import { useEffect, useRef } from "react";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordForm, ResetPasswordModalBackground, ResetPasswordModalContainer } from "./styles";
import { Form } from "../../Form";
import { api } from "../../../services/api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

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
                toast.error('Erro ao solicitar redefinição de senha!');
                return;
            }

            toast.success('E-mail de redefinição de senha enviado com sucesso!');
            setResetPasswordModalOpen(false);
            reset({email: ''});
        }).catch(error => {
            if (error instanceof AxiosError) {
                if (error.message === "Network Error") {
                    toast.error('Erro ao solicitar redefinição de senha! Tente novamente mais tarde.');
                } else {
                    const message = error.response?.data.message;
                    toast.error('Erro ao solicitar redefinição de senha: ' + message);
                }
            } else {
                toast.error('Erro ao solicitar redefinição de senha: ', error.message);
            }
        });
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