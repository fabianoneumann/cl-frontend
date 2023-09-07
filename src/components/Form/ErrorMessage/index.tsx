import { useFormContext } from 'react-hook-form';
import { FormErrorMessage } from './style';

interface ErrorMessageProps {
    field: string;
}

export function ErrorMessage(props: ErrorMessageProps) {
    const { formState: { errors } } = useFormContext();

    const fieldError = errors[props.field]

    if (!fieldError) {
        return null;
    }

    return (
        <FormErrorMessage>
            {fieldError.message?.toString()}
        </FormErrorMessage>
    )
}