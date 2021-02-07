import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  Form,
  FormItem,
  Input,
  InputPassword,
  Title,
  Checkbox,
  StyledLink,
  Select,
} from '../../UI';
import { onChangeState } from './types';
import { ActionLayout } from './utils';

declare type Props = { onChangeState: onChangeState };

const FormItemCheckbox = styled.div`
  color: var(--text-muted);
  font-size: 0.85rem;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 15px;
`;

export declare type optionsBloodType = { key: string | number; value: string };
const optionsBlood: Array<optionsBloodType> = [
  {
    key: '1',
    value: 'Любая',
  },
  {
    key: '2',
    value: 'O (I) - Rh+',
  },
  {
    key: '3',
    value: 'O (I) - Rh-',
  },
  {
    key: '4',
    value: 'A (II) - Rh+',
  },
  {
    key: '5',
    value: 'A (II) - Rh-',
  },
  {
    key: '6',
    value: 'B (III) - Rh+',
  },
  {
    key: '7',
    value: 'B (III) - Rh-',
  },
  {
    key: '8',
    value: 'AB (IV) - Rh+',
  },
  {
    key: '9',
    value: 'AB (IV) - Rh-',
  },
];

const SignUpForm: React.FC<Props> = ({ onChangeState }): JSX.Element => (
  <Form>
    <Title as='h2' margin='15px' >
      Регистрация
    </Title>
    <FormItem columns={1}>
      <Input placeholder='Укажите ФИО' />
    </FormItem>
    <FormItem columns={1}>
      <Select placeholder='Укажите пол'>
        <Select.Option key={1} value='man'>
          Мужской
        </Select.Option>
        <Select.Option key={2} value='woman'>
          Женский
        </Select.Option>
      </Select>
    </FormItem>
    <FormItem columns={1}>
      <Select placeholder='Укажите группу крови'>
        {optionsBlood.map(({ key, value }: optionsBloodType) => (
          <Select.Option key={key} value={key}>
            {value}
          </Select.Option>
        ))}
      </Select>
    </FormItem>
    <FormItem columns={1}>
      <Input placeholder='Укажите номер телефона' />
    </FormItem>
    <FormItem columns={1}>
      <Input placeholder='Укажите email' />
    </FormItem>
    <FormItem columns={1}>
      <InputPassword placeholder='Укажите пароль' />
    </FormItem>
    <FormItem columns={1}>
      <FormItemCheckbox>
        <Checkbox checked />
        <p>
          Я принимаю условия Пользовательского соглашения и даю своё согласие&nbsp;
          <Link href='/'>
            <StyledLink color='textMuted' underline>
              Donor.md
            </StyledLink>
          </Link>
          &nbsp; на обработку моей персональной информации на условиях, определенных&nbsp;
          <Link href='/privacy-policy'>
            <StyledLink color='textMuted' underline>
              Политикой конфиденциальности.
            </StyledLink>
          </Link>
        </p>
      </FormItemCheckbox>
    </FormItem>
    <FormItem columns={1}>
      <FormItemCheckbox>
        <Checkbox checked />
        <p>
          Даю согласие на обработку персональных данных (согласно Закону Приднестровья «О
          персональных данных»
        </p>
      </FormItemCheckbox>
    </FormItem>
    <div>
      <ActionLayout
        btnText='Зарегистрироваться'
        linkText='Войти'
        linkOnClick={() => onChangeState('signIn')}
      />
    </div>
  </Form>
);

export default SignUpForm;
