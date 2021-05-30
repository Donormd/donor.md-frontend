import { FC, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FormItem, Input, Title, Checkbox, StyledLink, Select } from '../../UI';
import { onChangeState } from './types';
import { ActionLayout } from './utils';
import { useAppSelector } from '../../../redux/store';
import { getOptions } from '../../../redux/common';
import { IUser } from '../../../interfaces/user';
import Alert from '../../alert';
import { isLoading } from '../../helpers';
import { Loading } from '../../UI/loading';
import { useAuth } from '../../../hooks/useAuth';
import { useRequiredAuth } from '../../../hooks/useRequiredAuth';

declare type Props = { onChangeState: onChangeState };

const validate = { required: 'Обязательное поле' };

export const SignUpForm: FC<Props> = ({ onChangeState }): JSX.Element => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const { register, control, handleSubmit, errors } = useForm();
  const { sex, bloodGroups } = useAppSelector((state) => state.common);
  const { status, error } = useAppSelector((state) => state.user);

  useRequiredAuth('/dashboard', '/auth');

  useEffect(() => {
    dispatch(getOptions('sex'));
    dispatch(getOptions('bloodGroups'));
  }, [dispatch]);

  const onSubmit = (data: IUser) => {
    auth?.signUp(data);
  };

  if (isLoading(sex) || isLoading(bloodGroups)) return <Loading />;

  const blood = bloodGroups?.data ? [...bloodGroups.data] : [];
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
              {sex.data &&
                sex.data.map(({ text, _id }) => (
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
            Я принимаю условия Пользовательского соглашения пользования Web-сервисом donor.md и даю своё согласие{' '}
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
      {status === 'error' && <Alert dismissible>{error}</Alert>}
      {status === 'success' && <Alert dismissible>Вы успешно зарегистрировались</Alert>}
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
