import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
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
import { useAppSelector } from '../../redux/store';
import { IChangePassword, ISettings } from '../../interfaces/settings';
import {
  getSettingsAction,
  updateSettingsAction,
  changePasswordAction,
} from '../../redux/redusers/settings';

const Settings: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();

  const { status, data, error } = useAppSelector((store) => store.settings);

  useEffect(() => {
    dispatch(getSettingsAction());
  }, [dispatch]);

  useEffect(() => {
    if (!data) return;
    const recoveryData = Object.entries(data);
    recoveryData.forEach(([key, val]) => setValue(key, val));
  }, [data, setValue]);

  const onSubmitSettings = (data: ISettings) => {
    dispatch(updateSettingsAction(data));
  };

  const onSubmitChangePassword = (data: IChangePassword) => {
    dispatch(changePasswordAction(data));
  };

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
      <Form onSubmit={handleSubmit(onSubmitSettings)}>
        <CheckboxGroup>
          <Checkbox>Сделать мой профиль публичным</Checkbox>
          <Checkbox>Я не могу быть донором</Checkbox>
          <Checkbox>Временные ограничения на сдачу крови</Checkbox>
        </CheckboxGroup>
        <Title as='h5' margin='10px' bold>
          Настройка уведомлений
        </Title>
        <CheckboxGroup>
          <Checkbox>Сделать мой профиль публичным</Checkbox>
          <Checkbox>Я не могу быть донором</Checkbox>
          <Checkbox>Временные ограничения на сдачу крови</Checkbox>
        </CheckboxGroup>
        <Button type='submit' variant='outline-danger' size='lg'>
          Сохранить
        </Button>
      </Form>
      <Form onSubmit={handleSubmit(onSubmitChangePassword)}>
        <Divider />
        <FormItem columns={2} label='Введите старый пароль'>
          <Input type='text' name='newPassword' innerRef={register} />
        </FormItem>
        <FormItem columns={2} label='Введите новый пароль'>
          <Input type='text' name='oldPassword' innerRef={register} />
        </FormItem>
        <Button type='submit' variant='outline-danger' size='lg'>
          Сменить пароль
        </Button>
      </Form>
      {status === 'error' && <Alert dismissible>{error}</Alert>}
      {status === 'success' && successMessage}
    </DashboardGrid>
  );
};

export default Settings;

const successMessage = (
  <Alert>
    Изменения в настройках сохранены <b>успешно!</b>
  </Alert>
);

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
