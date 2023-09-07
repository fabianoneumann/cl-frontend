import { LabelHTMLAttributes } from "react";
import { FormLabel } from "./style";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <FormLabel 
            {...props}
        />
    );
}