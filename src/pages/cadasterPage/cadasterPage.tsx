import { ReturnLogin, Logo, Input, InputSubmit } from '../../shared/components';

import {
  RegisterPage,
  RegisterContainer,
  RegisterTittle,
  RegisterForm,
  RegisterSubmit,
} from './styled';

function CadasterPage() {
  return (
    <RegisterPage>
      <ReturnLogin />
      <Logo />
      <RegisterContainer>
        <RegisterTittle>Cadastre-se rapidamente!</RegisterTittle>
        <RegisterForm>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Input type="password" placeholder="Confirme sua senha" />
          <RegisterSubmit>
            <InputSubmit
              description="Cadastrar-se"
              disabled={false}
              bgcolor="red"
            />
          </RegisterSubmit>
        </RegisterForm>
      </RegisterContainer>
    </RegisterPage>
  );
}

export { CadasterPage };
