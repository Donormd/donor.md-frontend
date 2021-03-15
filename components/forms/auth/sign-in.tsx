/* eslint no-console:0 */
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Button } from 'antd';
import { Divider, Form, FormItem, Input, Title, Paragraph } from '../../UI';
import { onChangeState } from './types';
import { ActionLayout, WrappedLink } from './utils';

declare type Props = { onChangeState: onChangeState };

const AdditionalLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const ButtonWithIcon = styled(Button)`
  &,
  &:hover,
  &:focus {
    padding: 0;
    margin-left: 15px;
    background: transparent;
    border: none;
  }
`;

const SignInForm: React.FC<Props> = ({ onChangeState }): JSX.Element => (
  <Form>
    <Title as='h2' margin='15px'>
      Авторизация
    </Title>
    <FormItem columns={1}>
      <Input placeholder='Введите email' />
    </FormItem>
    <FormItem columns={1}>
      <Input type='password' placeholder='Введите пароль' />
    </FormItem>
    <div>
      <ActionLayout
        btnText='Войти'
        linkText='Регистрация'
        linkOnClick={() => onChangeState('signUp')}
      />
      <WrappedLink onClick={() => onChangeState('recovery')} color='red' underline>
        Забыли пароль?
      </WrappedLink>
    </div>
    <Divider />
    <AdditionalLogin>
      <Paragraph size='1rem'>Или войти через:</Paragraph>
      <SocialList>
        <li>
          <ButtonWithIcon onClick={() => console.log('---> VK')}>
            <Image
              src='/images/social-icons/vk.svg'
              width={25}
              height={25}
              alt='вы можете войти через вконтакте'
            />
          </ButtonWithIcon>
        </li>
        <li>
          <ButtonWithIcon onClick={() => console.log('---> FB')}>
            <Image
              src='/images/social-icons/fb.svg'
              width={25}
              height={25}
              alt='вы можете войти через фэйсбук'
            />
          </ButtonWithIcon>
        </li>
        <li>
          <ButtonWithIcon onClick={() => console.log('---> GL')}>
            <Image
              src='/images/social-icons/google.svg'
              width={25}
              height={25}
              alt='вы можете войти через гугл'
            />
          </ButtonWithIcon>
        </li>
        <li>
          <ButtonWithIcon onClick={() => console.log('---> OK')}>
            <Image
              src='/images/social-icons/ok.svg'
              width={25}
              height={25}
              alt='вы можете войти через одноклассники'
            />
          </ButtonWithIcon>
        </li>
      </SocialList>
    </AdditionalLogin>
  </Form>
);

export default SignInForm;
