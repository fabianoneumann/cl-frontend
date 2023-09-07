import { FormField } from "./style";

interface FieldProps extends React.InputHTMLAttributes<HTMLDivElement> {}

export function Field(props: FieldProps) {
    return (
        <FormField {...props} />
    )
}