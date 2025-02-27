import "./Input.css";

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
};

export const Input = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  required,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};
