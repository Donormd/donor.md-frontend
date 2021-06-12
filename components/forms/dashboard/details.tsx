import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { IUser } from '../../../core/interfaces/user';
import { getOptions } from '../../../redux/common';
import { updateUserAction } from '../../../redux/redusers/user';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { Alert } from '../../alert';
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  FormItem,
  Input,
  Select,
  Title,
} from '../../UI';

export const DetailsForm: FC = () => {
  const dispatch = useAppDispatch();
  const { register, setValue, control, handleSubmit, watch } = useForm();
  const {
    user: { data: userData, status },
    common: { bloodGroups, cities, organizations, sex },
  } = useAppSelector((state) => state);

  const isCorporateDonation = watch('corporateDonations');

  useEffect(() => {
    if (!userData) return;

    const recoveryData = Object.entries(userData);
    recoveryData.forEach(([key, val]) => key !== 'token' && setValue(key, val));
    userData.corporateId && setValue('corporateDonations', true);
  }, [setValue, userData]);

  useEffect(() => {
    dispatch(getOptions('sex'));
    dispatch(getOptions('bloodGroups'));
    dispatch(getOptions('cities'));
    dispatch(getOptions('organizations'));
  }, [dispatch]);

  const onSubmit = (data: IUser) => {
    dispatch(updateUserAction(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem columns={2} label='ФИО' required>
        <Input name='fullname' innerRef={register} />
      </FormItem>
      <FormItem columns={2} label='Дата рождения' required>
        <span>{userData?.dateBirth}</span>
        <Controller
          name='dateBirth'
          control={control}
          render={({ onChange }) => {
            return (
              <DatePicker
                onChange={(_, date) => {
                  onChange(date);
                }}
              />
            );
          }}
        />
      </FormItem>
      <FormItem columns={2} label='Группа крови' required>
        <Controller
          name='bloodGroupId'
          control={control}
          as={
            <Select size='large' placeholder='Ваша группа крови'>
              {bloodGroups.data &&
                bloodGroups.data.map(({ _id, text }) => (
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
              {sex.data &&
                sex.data.map(({ _id, text }) => (
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
              {cities.data &&
                cities.data.map(({ _id, text }) => (
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
              {organizations.data &&
                organizations.data.map(({ _id, text }) => (
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
      {status === 'success' && <Alert dismissible>Вы успешно обновили информацию</Alert>}
    </Form>
  );
};
