import styled from 'styled-components';

export const LoginPageCSS = styled.div`
  height: 100vh;
  background-color: #333b65;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginTittle = styled.h1`
  color: white;
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: -15px;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;

export const LoginRet = styled.div`
  width: 7.6vw;
  height: 3px;
  background-color: white;
`;

export const LoginOr = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  margin: 0 1.2vw;
`;

export const LoginNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkGoogle = styled.a`
  width: 20vw;
  height: 60px;
  background-color: white;
  color: #eb5a4e;
  font-size: 26px;
  text-decoration: none;
  border: solid 1px #eb5a4e;
  border-radius: 5px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
`;

export const LinkFacebook = styled.a`
  width: 20vw;
  height: 60px;
  background-color: white;
  color: #475993;
  font-size: 26px;
  text-decoration: none;
  border: solid 1px #475993;
  border-radius: 5px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
`;

export const ImgLink = styled.img`
  height: 40px;
  margin: 0px 15px;
`;

export const RegisterLink = styled.a`
  color: white;
  font-size: 38px;
  font-weight: bold;
  text-decoration: underline;
  margin-top: 20px;
`;
