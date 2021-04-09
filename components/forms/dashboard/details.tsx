import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  FormItem,
  Input,
  Paragraph,
  Select,
  Title,
} from '../../UI';
import { useAppSelector } from '../../../redux/store';
import { getOptions } from '../../../redux/common';
import { IUser } from '../../../interfaces/user';

export const DetailsForm: FC = () => {
  const [activeSelect, setSelectStatus] = useState(false);
  const dispatch = useDispatch();
  const { register, setValue, control, handleSubmit } = useForm();
  const {
    user: { data: userData },
    common: { bloodGroups, cities, organizations, sex },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (!userData) return;

    const recoveryData = Object.entries(userData);
    recoveryData.forEach(([key, val]) => key !== 'token' && setValue(key, val));
  }, [userData]);

  useEffect(() => {
    dispatch(getOptions('sex'));
    dispatch(getOptions('bloodGroups'));
    dispatch(getOptions('cities'));
    dispatch(getOptions('organizations'));
  }, []);

  const onSubmit = (data: IUser) => {
    dispatch(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem columns={2} label='ФИО' required>
        <Input name='fullname' innerRef={register} />
      </FormItem>
      <FormItem columns={2} label='Дата рождения' required>
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
        <Checkbox name='corporateDonations' onChange={(e) => setSelectStatus(e.target.checked)}>
          <Paragraph as='span' size='1.2em'>
            Я участник программы корпоративное донорство
          </Paragraph>
        </Checkbox>
      </FormItem>
      <FormItem columns={2} label='Выберите вашу организацию'>
        <Controller
          name='corporateId'
          control={control}
          as={
            <Select size='large' placeholder='Выберите вашу организацию' disabled={!activeSelect}>
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
    </Form>
  );
};
