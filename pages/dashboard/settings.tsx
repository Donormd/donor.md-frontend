import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Checkbox,
  Divider,
  Form,
  FormItem,
  Input,
  Paragraph,
  Title,
  TitleWithArrow,
} from '../../components/UI';
import Alert from '../../components/alert';
import DashboardGrid from '../../layouts/dashboard-grid';

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;

  & label {
    margin-left: 0 !important;
    margin-bottom: 15px;
  }
`;

const Aricle = styled.article`
  margin-top: 50px;
`;

const Settings: React.FC = (): JSX.Element => {
  return (
    <DashboardGrid>
      <TitleWithArrow>Настройка</TitleWithArrow>
      <Aricle>
        <Title as='h5' margin='10px' bold>
          Настройка донорского кабинета
        </Title>
        <Paragraph>
          В этом разделе вы сможете настроить работу донорского кабинета и настройки системы
          уведомлений
        </Paragraph>
      </Aricle>
      <CheckboxGroup>
        <Checkbox>Сделать мой профиль публичным</Checkbox>
        <Checkbox>Я не могу быть донором</Checkbox>
        <Checkbox>Временные ограничения на сдачу крови</Checkbox>
      </CheckboxGroup>
      <Divider />
      <Form>
        <FormItem label='Задать новый пароль'>
          <Input />
        </FormItem>
        <FormItem
          label='Задать новый email-адрес'
          help={`
        Электронный адрес является основным каналом
        коммуникации между нашим сайтом, донорами и
        реципиентами. Если вы хотите получать сообщения от нашего
        сайта на электронную почту, укажитеэто ниже.
        `}
        >
          <Input />
        </FormItem>
        <Divider />
        <Title as='h5' margin='10px' bold>
          Настройка донорского кабинета
        </Title>
        <CheckboxGroup>
          <Checkbox>Сделать мой профиль публичным</Checkbox>
          <Checkbox>Я не могу быть донором</Checkbox>
          <Checkbox>Временные ограничения на сдачу крови</Checkbox>
        </CheckboxGroup>
        <Button variant='outline-danger' size='lg'>
          Сохранить
        </Button>
        <Alert>
          Изменения в настройках сохранены <b>успешно!</b>
        </Alert>
      </Form>
    </DashboardGrid>
  );
};

export default Settings;
