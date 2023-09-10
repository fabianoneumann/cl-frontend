import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordForm, ResetPasswordModalBackground, ResetPasswordModalContainer } from "./styles";
import { Form } from "../../Form";

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

    const { handleSubmit } = resetPasswordForm;

    const [ output, setOutput ] = useState('');

    function resetPassword(data: ResetPasswordFormData) {
        setOutput(JSON.stringify(data, null, 2));
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

                    <pre>{output}</pre>
                </ResetPasswordModalContainer>
            </ResetPasswordModalBackground>
        )
    } else {
        return null;
    }
}