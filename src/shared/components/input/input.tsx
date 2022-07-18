import { InputCSS } from './styled';

interface InputProps {
  placeholder: string;
  type: string;
}

function Input({ placeholder, type }: InputProps) {
  return (
    <div>
      <InputCSS type={type} placeholder={placeholder} />
    </div>
  );
}

export { Input };
