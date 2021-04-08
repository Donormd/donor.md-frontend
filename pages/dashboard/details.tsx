import React, { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import DashboardButtonsLinks from '../../components/dashboard-buttons-links';
import {
  TitleWithArrow,
  Button,
  Form,
  FormItem,
  Input,
  Divider,
  DatePicker,
  Checkbox,
  Title,
  Paragraph,
  Select,
} from '../../components/UI';
import DashboardGrid from '../../layouts/dashboard-grid';
import { useAppSelector } from '../../redux/store';
import { getOptions } from '../../redux/common';
import { UserStoryForm } from '../../components/forms/user-story';

const MyDetails: FC = () => {
  const dispatch = useDispatch();
  const { register, setValue, control } = useForm();
  const {
    common: { bloodGroups, cities, organizations, sex },
    user: { data: userData },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getOptions('sex'));
    dispatch(getOptions('bloodGroups'));
    dispatch(getOptions('cities'));
    dispatch(getOptions('organizations'));
  }, []);

  useEffect(() => {
    if (!userData) return;

    const recoveryData = Object.entries(userData);
    recoveryData.forEach(([key, val]) => key !== 'token' && setValue(key, val));
  }, [userData]);

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои данные</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form>
        <FormItem columns={2} label='ФИО' required>
          <Input name='fullname' innerRef={register} />
        </FormItem>
        <FormItem columns={2} label='Дата рождения' required>
          <Controller name='dateBirth' control={control} as={<DatePicker />} />
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
          <Select size='large' placeholder='Город проживания'>
            {cities.data &&
              cities.data.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
          </Select>
        </FormItem>
        <Divider />
        <Title as='h4' margin='30px' bold>
          Корпоративное донорство
        </Title>
        <FormItem columns={2}>
          <Checkbox>
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
              <Select size='large' placeholder='Выберите вашу организацию'>
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
      <UserStoryForm />
    </DashboardGrid>
  );
};

export default MyDetails;
