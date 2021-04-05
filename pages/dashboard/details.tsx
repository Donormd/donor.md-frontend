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
  TextArea,
  DatePicker,
  Checkbox,
  Title,
  Paragraph,
  Select,
} from '../../components/UI';
import DashboardGrid from '../../layouts/dashboard-grid';
import { useAppSelector } from '../../redux/store';
import { getOptions } from '../../redux/common';

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
    setValue('fullname', userData.fullname);
    setValue('email', userData.email);
    setValue('bloodGroupId', userData.bloodGroupId);
    setValue('phone', userData.phone);
    setValue('phoneMobile', userData.phoneMobile);
    setValue('corporateId', userData.corporateId);
    setValue('sexId', userData.sexId);
    setValue('dateBirth', userData.dateBirth);
  }, []);

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
                    <Select.Option value={_id}>{text}</Select.Option>
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
                    <Select.Option value={_id}>{text}</Select.Option>
                  ))}
              </Select>
            }
          />
        </FormItem>
        <FormItem columns={2} label='Город проживания' required>
          <Select size='large' placeholder='Город проживания'>
            {cities.data &&
              cities.data.map(({ _id, text }) => <Select.Option value={_id}>{text}</Select.Option>)}
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
                    <Select.Option value={_id}>{text}</Select.Option>
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
        <div>
          <Title as='h5' margin='15px'>
            Моя история
          </Title>
          <Paragraph color='textMuted' margin='15px'>
            Напишите историю о том, как и почему вы решились стать донором (что для вас это значит).
            Это поможет многим людям, которые еще не определились, решиться на то, чтобы тоже стать
            донором. Если вы первый раз сдаете кровь напишите, почему вырешились сдать кровь, потом
            напишите еще!)
          </Paragraph>
        </div>
        <FormItem>
          <TextArea rows={7} name='story' ref={register} />
        </FormItem>
        <Button variant='outline-danger' size='lg'>
          Сохранить
        </Button>
      </Form>
    </DashboardGrid>
  );
};

export default MyDetails;
