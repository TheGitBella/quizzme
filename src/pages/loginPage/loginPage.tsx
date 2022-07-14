import { Link } from 'react-router-dom';

import {
  Space,
  Logo,
  InputEmail,
  InputPassword,
  InputSubmit,
} from '../../shared/components';

import { Google, Facebook } from '../../assets/images';

import './style.css';

function LoginPage() {
  return (
    <div className="login-page">
      <Space />
      <Logo />
      <div className="login-box">
        <h1 className="login-tittle">Faça Login</h1>
        <form className="login-form">
          <InputEmail description="Email" />
          <InputPassword description="Senha" />
          <InputSubmit description="Logar no Quizz Me!" />
        </form>
        <div className="division">
          <div className="retangle"></div>
          <p className="or">OU</p>
          <div className="retangle"></div>
        </div>
        <nav className="login-nav">
          <Link className="connect-google" to="/">
            <img src={Google} alt="google" className="img-connect" />
            Conectar com o google
          </Link>
          <Link className="connect-facebook" to="/">
            <img src={Facebook} alt="facebook" className="img-connect" />
            Conectar com o Facebook
          </Link>
        </nav>
        <div className="division">
          <div className="retangle"></div>
          <p className="or">OU</p>
          <div className="retangle"></div>
        </div>
        <Link className="cadaster-link" to="/cadaster">
          Crie uma conta
        </Link>
      </div>
    </div>
  );
}

export { LoginPage };
