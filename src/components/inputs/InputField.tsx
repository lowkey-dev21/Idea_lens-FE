import { InputFieldProps } from "../../interfaces"

const InputField = ({
    type,
    placeholder,
    value,
    onChange,
    label,
    name,
    id,
    className,
    disabled,
    required,
    defaultValue,
   
}:InputFieldProps) => {
  return (
    <section className={`flex flex-col ${className}`}>
        {label && <label htmlFor={id} className="text-sm text-gray-700">{label}</label>}
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${disabled ? 'bg-gray-200' : 'bg-white'}`}
            disabled={disabled}
            required={required}
            defaultValue={defaultValue}/>

    </section>
  )
}
export default InputField