import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { IUser } from '../../../core/interfaces/user';
import { getOptions } from '../../../queries/common';
import { createUser } from '../../../queries/user';
import { useTypedMutation, useTypedQuery } from '../../../queries/utils';
import { Alert } from '../../alert';
import { Checkbox, FormItem, Input, Select, StyledLink, Title } from '../../UI';
import { Loading } from '../../UI/loading';
import { onChangeState } from './types';
import { ActionLayout } from './utils';

declare type Props = { onChangeState: onChangeState };

const validate = { required: 'Обязательное поле' };

export const SignUpForm = ({ onChangeState }: Props) => {
  const { register, control, handleSubmit, errors } = useForm();
  const { data: bloodGroups, isLoading: bloodGroupsLoading } = useTypedQuery('bloodGroups', () =>
    getOptions('bloodGroups'),
  );
  const { data: sex, isLoading: sexLoading } = useTypedQuery('sex', () => getOptions('sex'));
  const { mutate, isError, isSuccess } = useTypedMutation('user', (payload: IUser) =>
    createUser(payload),
  );

  const onSubmit = (payload: IUser) => {
    mutate(payload);
  };

  if (bloodGroupsLoading || sexLoading) return <Loading />;

  const blood = bloodGroups ? [...bloodGroups] : [];
  blood.shift();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h2' margin='15px'>
        Регистрация
      </Title>
      <FormItem error={errors.fullname?.message}>
        <Input placeholder='Укажите ФИО' name='fullname' innerRef={register(validate)} />
      </FormItem>
      <FormItem error={errors.sexId?.message}>
        <Controller
          name='sexId'
          control={control}
          rules={validate}
          as={
            <Select size='large' placeholder='Укажите пол'>
              {sex &&
                sex.map(({ text, _id }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
            </Select>
          }
        />
      </FormItem>
      <FormItem error={errors.bloodGroupId?.message}>
        <Controller
          name='bloodGroupId'
          control={control}
          rules={validate}
          as={
            <Select size='large' placeholder='Укажите группу крови'>
              {blood &&
                blood.map(({ text, _id }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
            </Select>
          }
        />
      </FormItem>
      <FormItem error={errors.phoneMobile?.message}>
        <Input
          placeholder='Укажите номер телефона'
          name='phoneMobile'
          innerRef={register(validate)}
        />
      </FormItem>
      <FormItem error={errors.email?.message}>
        <Input
          placeholder='Укажите email'
          type='email'
          name='email'
          innerRef={register(validate)}
        />
      </FormItem>
      <FormItem error={errors.password?.message}>
        <Input
          type='password'
          placeholder='Укажите пароль'
          name='password'
          innerRef={register(validate)}
        />
      </FormItem>
      <FormItem>
        <FormItemCheckbox>
          <Checkbox readOnly defaultChecked />
          <p>
            Я принимаю условия Пользовательского соглашения пользования Web-сервисом donor.md и даю
            своё согласие{' '}
            <Link href='/'>
              <StyledLink color='textMuted' underline>
                Donor.md
              </StyledLink>
            </Link>{' '}
            на обработку моей персональной информации на условиях, определенных{' '}
            <Link href='/privacy-policy'>
              <StyledLink color='textMuted' underline>
                Политикой конфиденциальности.
              </StyledLink>
            </Link>
          </p>
        </FormItemCheckbox>
      </FormItem>
      <FormItem>
        <FormItemCheckbox>
          <Checkbox readOnly defaultChecked />
          <p>
            Даю согласие на обработку персональных данных (согласно Закону Приднестровья «О
            персональных данных»)
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
      {isError && <Alert dismissible>error</Alert>}
      {isSuccess && <Alert dismissible>Вы успешно зарегистрировались</Alert>}
    </form>
  );
};

const FormItemCheckbox = styled.div`
  color: ${({ theme }) => theme.colors.textMuted}
  font-size: 0.85rem;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 15px;
`;
