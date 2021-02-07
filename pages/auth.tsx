import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../components/logo';
import { Container } from '../layouts/container';
import { TitleWithArrow } from '../components/UI';
import SignInForm from '../components/forms/auth/sign-in';
import SignUpForm from '../components/forms/auth/sign-up';
import RecoveryForm from '../components/forms/auth/recovery';

const Main = styled.main`
  min-height: 100%;
  padding: 20px 0;
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

const StyledTitle = styled(TitleWithArrow)`
  padding-top: 20px;
`;

const AuthPage: React.FC = (): JSX.Element => {
  const [state, setState] = useState<string>('signIn');

  return (
    <Main>
      <Container>
        <Logo />
        <StyledTitle className='h2' margin='15px' align='center'>
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
