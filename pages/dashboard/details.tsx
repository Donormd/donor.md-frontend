import React, { FC } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
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
  Switch,
  Select,
} from '../../components/UI';
import DashboardGrid from '../../layouts/dashboard-grid';
import { useAppSelector } from '../../redux/store';

const MyDetails: FC = () => {
  const { bloodGroups, cities, organizations } = useAppSelector((state) => state.common);
  const { register } = useForm();

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои данные</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form>
        <FormItem columns={2} label='ФИО' required>
          <Input name='fullname' innerRef={register} />
        </FormItem>
        <FormItem columns={2} label='Дата рождения' required>
          <DatePicker />
        </FormItem>
        <FormItem columns={2} label='Группа крови' required>
          <Select size='large' placeholder='Ваша группа крови'>
            {bloodGroups.data &&
              bloodGroups.data.map(({ _id, text }) => (
                <Select.Option value={_id}>{text}</Select.Option>
              ))}
          </Select>
        </FormItem>
        <FormItem columnsSm={2} columns={2} label='Пол' required>
          <WrapperSwitch>
            <span>Мужской</span>
            <Switch />
            <span>Женский</span>
          </WrapperSwitch>
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
          <Select size='large' placeholder='Выберите вашу организацию'>
            {organizations.data &&
              organizations.data.map(({ _id, text }) => (
                <Select.Option value={_id}>{text}</Select.Option>
              ))}
          </Select>
        </FormItem>
        <Divider />
        <Title as='h4' margin='30px' bold>
          Ваши контакты
        </Title>
        <FormItem columns={2} label='Ваш email-адрес' required>
          <Input />
        </FormItem>
        <FormItem columns={2} label='Номер мобильного телефона' required>
          <Input />
        </FormItem>
        <FormItem columns={2} label='Номер домашнего телефона' required>
          <Input />
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
          <TextArea rows={7} />
        </FormItem>
        <Button variant='outline-danger' size='lg'>
          Сохранить
        </Button>
      </Form>
    </DashboardGrid>
  );
};

export default MyDetails;

const WrapperSwitch = styled.div`
  display: flex;
  & > * {
    margin-right: 15px;
  }
`;
