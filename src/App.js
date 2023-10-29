import React from 'react';
import styled from 'styled-components';
import img from './img.png';
import running from './running (2).gif';
import bg from './bg.png';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 160vh;
    background-size: 400% 800%;
    
  }
  
`;

const AuthBox = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 1000px;
  max-height: 1200px;
  min-height:300px;
  height: 65%;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: 82%;
  }
`;

const LeftContainer = styled.div`
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const AuthImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;

  
`;

const RightContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 5px;
`;

const RememberMeLabel = styled.label`
  margin-right: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TermsLink = styled.a`
  font-weight: bold;
  color: orange;
  text-decoration: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
`;

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  a {
    font-weight: bold;
    color: orange;
    text-decoration: none;
  };
`;

const Login = () => {
  return (
    <LoginContainer>
      <AuthBox>
        <LeftContainer>
          <AuthImage src={running} alt="running" />
        </LeftContainer>
        <RightContainer>
          <Title>Login</Title>
          <img src={img} alt="img" style={{ maxWidth: '100%' }} />
          <FormContainer>
            <div>
              <label htmlFor="loginID">Login ID</label>
              <Input type="text" id="loginID" placeholder="Enter the Login ID" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Input type="password" id="password" placeholder="Enter Password" />
            </div>
            <CheckboxContainer>
              <CheckboxInput type="checkbox" id="rememberMe" />
              <RememberMeLabel htmlFor="rememberMe">Remember Me</RememberMeLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <CheckboxInput type="checkbox" id="termsConditions" />
              <RememberMeLabel htmlFor="termsConditions">Agree to <TermsLink href="#">&nbsp;Terms & Conditions</TermsLink></RememberMeLabel>
            </CheckboxContainer>
            <ButtonContainer>
              <Button>Login</Button>
            </ButtonContainer>
          </FormContainer>
        </RightContainer>
      </AuthBox>
    </LoginContainer>
  );
};

const Register = () => {
  // Add your Register component content here
  return null;
};

const ChangePassword = () => {
  // Add your "Change Password" component content here
  return null;
};

export default Login;
