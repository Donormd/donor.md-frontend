import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { IUser } from '../../../core/interfaces/user';
import { getOptions } from '../../../queries/common';
import { getUser, updateUser } from '../../../queries/user';
import { useTypedMutation, useTypedQuery } from '../../../queries/utils';
import { Alert } from '../../alert';
import { Button, Checkbox, Divider, Form, FormItem, Input, Select, Title } from '../../UI';

export const DetailsForm = () => {
  const { register, setValue, control, handleSubmit, watch } = useForm();

  const { data: user } = useTypedQuery('user', getUser);
  const { data: sex } = useTypedQuery('sex', () => getOptions('sex'));
  const { data: bloodGroups } = useTypedQuery('bloodGroups', () => getOptions('bloodGroups'));
  const { data: cities } = useTypedQuery('cities', () => getOptions('cities'));
  const { data: organizations } = useTypedQuery('organizations', () => getOptions('organizations'));
  const { mutateAsync, isSuccess, isError } = useTypedMutation('user', updateUser);

  const isCorporateDonation = watch('corporateDonations');

  useEffect(() => {
    if (!user) return;

    const recoveryData = Object.entries(user);
    recoveryData.forEach(([key, val]) => key !== 'token' && setValue(key, val));
    user.corporateId && setValue('corporateDonations', true);
  }, [setValue, user]);

  const onSubmit = (data: IUser) => {
    mutateAsync(data)
      // eslint-disable-next-line no-console
      .then((data) => console.log('DetailsForm, data', data))
      // eslint-disable-next-line no-console
      .catch((error) => console.log('DetailsForm, error', error));
  };

  if (!sex || !bloodGroups || !cities || !organizations) return null;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem columns={2} label='ФИО' required>
        <Input name='fullname' innerRef={register} />
      </FormItem>
      <FormItem columns={2} label='Дата рождения' required>
        <Input name='dateBirth' type='date' innerRef={register} />
      </FormItem>
      <FormItem columns={2} label='Группа крови' required>
        <Controller
          name='bloodGroupId'
          control={control}
          as={
            <Select size='large' placeholder='Ваша группа крови'>
              {bloodGroups.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          }
        />
      </FormItem>
      <FormItem columns={2} label='Пол' required>
        <Controller
          name='sexId'
          control={control}
          checked={false}
          as={
            <Select size='large' placeholder='Город проживания'>
              {sex.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          }
        />
      </FormItem>
      <FormItem columns={2} label='Город проживания' required>
        <Controller
          name='cityId'
          control={control}
          checked={false}
          as={
            <Select size='large' placeholder='Город проживания'>
              {cities.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          }
        />
      </FormItem>
      <Divider />
      <Title as='h4' margin='30px' bold>
        Корпоративное донорство
      </Title>
      <FormItem columns={2}>
        <Checkbox name='corporateDonations' innerRef={register}>
          Я участник программы корпоративное донорство
        </Checkbox>
      </FormItem>
      <FormItem columns={2} label='Выберите вашу организацию'>
        <Controller
          name='corporateId'
          control={control}
          as={
            <Select
              size='large'
              placeholder='Выберите вашу организацию'
              disabled={!isCorporateDonation}
            >
              {organizations.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          }
        />
      </FormItem>
      <Divider />
      <Title as='h4' margin='30px' bold>
        Ваши контакты
      </Title>
      <FormItem columns={2} label='Ваш email-адрес' required>
        <Input name='email' innerRef={register} />
      </FormItem>
      <FormItem columns={2} label='Номер мобильного телефона' required>
        <Input name='phoneMobile' innerRef={register} />
      </FormItem>
      <FormItem columns={2} label='Номер домашнего телефона' required>
        <Input name='phone' innerRef={register} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Обновить информацию
      </Button>
      {isSuccess && <Alert dismissible>Вы успешно обновили информацию</Alert>}
      {isError && <Alert dismissible>Что-то пошло не так</Alert>}
    </Form>
  );
};
