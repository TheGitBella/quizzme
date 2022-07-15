import { Link } from 'react-router-dom';

import { Space, Logo, Input, InputSubmit } from '../../shared/components';

import { Google, Facebook } from '../../assets/images';

import {
  LoginPageCSS,
  LoginContainer,
  LoginTittle,
  LoginForm,
  LoginDiv,
  LoginRet,
  LoginOr,
  LoginNav,
  LinkGoogle,
  LinkFacebook,
  ImgLink,
  RegisterLink,
} from './styled';

function LoginPage() {
  return (
    <LoginPageCSS>
      <Space />
      <Logo />
      <LoginContainer>
        <LoginTittle>Faça Login</LoginTittle>
        <LoginForm>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <InputSubmit description="Logar no Quizz Me!" />
        </LoginForm>
        <LoginDiv>
          <LoginRet />
          <LoginOr>OU</LoginOr>
          <LoginRet />
        </LoginDiv>
        <LoginNav>
          <LinkGoogle to="/">
            <ImgLink src={Google} alt="google" />
            Conectar com o google
          </LinkGoogle>
          <LinkFacebook to="/">
            <ImgLink src={Facebook} alt="facebook" />
            Conectar com o Facebook
          </LinkFacebook>
        </LoginNav>
        <LoginDiv>
          <LoginRet></LoginRet>
          <LoginOr>OU</LoginOr>
          <LoginRet></LoginRet>
        </LoginDiv>
        <RegisterLink href="./">Crie uma conta</RegisterLink>
      </LoginContainer>
    </LoginPageCSS>
  );
}

export { LoginPage };
