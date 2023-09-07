import { useFormContext } from 'react-hook-form';
import { FormInput } from './style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export function Input(props: InputProps) {
    const { register } = useFormContext();

    return (
        <FormInput
            id={props.name}
            {...register(props.name)}
            {...props}
        />
    )
}