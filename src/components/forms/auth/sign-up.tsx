import Link from 'next/link';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { prepareError } from '../../../core/helpers/prepare-data';
import { IUser } from '../../../core/interfaces/user';
import { getOptions } from '../../../queries/common';
import { createUser } from '../../../queries/user';
import { useTypedMutation, useTypedQuery } from '../../../queries/utils';
import { userAtom } from '../../../store/atoms/user-atom';
import { Alert } from '../../UI/alert';
import { Checkbox } from '../../UI/form/checkbox';
import { FormItem } from '../../UI/form/form-item';
import { Input } from '../../UI/form/input';
import { Select } from '../../UI/form/select';
import { StyledLink } from '../../UI/links';
import { Loading } from '../../UI/loading';
import { Title } from '../../UI/typography';
import { onChangeState } from './types';
import { ActionLayout } from './utils';

declare type Props = { onChangeState: onChangeState };

const validate = { required: 'Обязательное поле' };

export const SignUpForm = ({ onChangeState }: Props) => {
  const [user, setUser] = useRecoilState(userAtom);

  const { register, control, handleSubmit, errors } = useForm({
    defaultValues: { ...user, password: '', bloodGroupId: null, sexId: null },
  });

  const { data: bloodGroups, isLoading: bloodGroupsLoading } = useTypedQuery('blood-groups', () =>
    getOptions('blood-groups'),
  );
  const { data: sex, isLoading: sexLoading } = useTypedQuery('sex', () => getOptions('sex'));
  const {
    mutate,
    isError,
    isSuccess,
    error,
    data: userData,
  } = useTypedMutation('user', (payload: IUser) => createUser(payload));

  useEffect(() => {
    if (!userData) return;
    setUser(userData);
  }, [setUser, userData]);

  const onSubmit = (payload: IUser) => {
    mutate(payload);
  };

  if (bloodGroupsLoading || sexLoading) return <Loading />;

  const blood = bloodGroups || [];
  blood.shift();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h2' margin='15px'>
        Регистрация
      </Title>
      <FormItem error={errors.fullname?.message}>
        <Input placeholder='Укажите ФИО' name='fullname' ref={register(validate)} />
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
        <Input placeholder='Укажите номер телефона' name='phoneMobile' ref={register(validate)} />
      </FormItem>
      <FormItem error={errors.email?.message}>
        <Input placeholder='Укажите email' type='email' name='email' ref={register(validate)} />
      </FormItem>
      <FormItem error={errors.password?.message}>
        <Input type='password' placeholder='Укажите пароль' name='password' ref={register(validate)} />
      </FormItem>
      <FormItem>
        <FormItemCheckbox>
          <Checkbox readOnly defaultChecked />
          <p>
            Я принимаю условия Пользовательского соглашения пользования Web-сервисом donor.md и даю своё
            согласие{' '}
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
            Даю согласие на обработку персональных данных (согласно Закону Приднестровья «О персональных
            данных»)
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
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
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
