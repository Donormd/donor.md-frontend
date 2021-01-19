import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/logo';
import { Container } from '../layouts/container';
import { Title } from '../components/UI';
import SignInForm from '../components/forms/auth/sign-in';
import SignUpForm from '../components/forms/auth/sign-up';
import RecoveryForm from '../components/forms/auth/recovery';

const Main = styled.main`
  height: 100%;
  padding-top: 20px;
  @media (min-width: 992px) {
    background: url('/images/auth.png');
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 53vh 31vw;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 15px 25px;
  background: ${({ theme }) => theme.primary};
  border: ${({ theme }) => `1px solid ${theme.redDiluted}`};
  border-radius: ${({ theme }) => theme.radius};

  @media (min-width: 768px) {
    padding: 30px 50px;
  }
`;

const StyledTitle = styled(Title)`
  padding-top: 20px;
  &::after {
    content: url('/images/arrow-right.svg');
    width: 22px;
    padding-left: 10px;
    position: absolute;
  }
`;

const AuthPage: React.FC = (): JSX.Element => {
  const [state, setState] = useState<'signIn' | 'signUp' | 'recovery'>('signIn');

  return (
    <Main>
      <Container>
        <Logo />
        <StyledTitle align='center' size='2.2rem'>
          Кабинет Донора
        </StyledTitle>
        <FormWrapper>
          {state === 'signIn' && <SignInForm onChangeState={setState} />}
          {state === 'signUp' && <SignUpForm onChangeState={setState} />}
          {state === 'recovery' && <RecoveryForm onChangeState={setState} />}
        </FormWrapper>
      </Container>
    </Main>
  );
};

export default AuthPage;
