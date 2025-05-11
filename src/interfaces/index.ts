// input interface
export interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    name?: string;
    id?: string;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    defaultValue?: string;
}