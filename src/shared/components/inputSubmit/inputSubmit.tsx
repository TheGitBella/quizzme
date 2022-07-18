import { SubmitBtn } from './styled';

interface InputSubmitProps {
  description: string;
  bgcolor?: string;
  disabled?: boolean;
}

function InputSubmit({ description, bgcolor, disabled }: InputSubmitProps) {
  return (
    <div>
      <SubmitBtn type="submit" disabled={disabled} color={bgcolor}>
        {description}
      </SubmitBtn>
    </div>
  );
}

export { InputSubmit };
