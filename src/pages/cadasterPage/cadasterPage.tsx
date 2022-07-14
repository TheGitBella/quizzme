import {
  ReturnLogin,
  Logo,
  InputText,
  InputEmail,
  InputPassword,
  InputSubmit,
} from '../../shared/components';

import './style.css';

function CadasterPage() {
  return (
    <div className="cadaster-page">
      <ReturnLogin />
      <Logo />
      <div className="cadaster-box">
        <h1 className="cadaster-tittle">Cadastre-se rapidamente!</h1>
        <form className="cadaster-form">
          <InputText description="Nome" />
          <InputEmail description="Email" />
          <InputPassword description="Senha" />
          <InputPassword description="Confirme sua senha" />
          <div className="cadaster-submit">
            <InputSubmit description="Cadastrar-se" disabled={false} />
          </div>
        </form>
      </div>
    </div>
  );
}

export { CadasterPage };
