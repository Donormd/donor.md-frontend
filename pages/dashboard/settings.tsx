import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Alert } from '../../components/alert';
import { ChangePassword } from '../../components/forms/dashboard/settings/change-password';
import { Button, Checkbox, Form, Paragraph, Title, TitleWithArrow } from '../../components/UI';
import { ISettings } from '../../core/interfaces/settings';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';
import { getSettingsAction, updateSettingsAction } from '../../redux/redusers/settings';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const Settings = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, setValue, register } = useForm();

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

  return (
    <DashboardGrid>
      <TitleWithArrow>Настройка</TitleWithArrow>
      <Article>
        <Title as='h5' margin='10px' bold>
          Настройка донорского кабинета
        </Title>
        <Paragraph>
          В этом разделе вы сможете настроить работу донорского кабинета и настройки системы
          уведомлений
        </Paragraph>
      </Article>
      <Form onSubmit={handleSubmit(onSubmitSettings)}>
        <CheckboxGroup>
          <Checkbox name='isPublic' innerRef={register}>
            Сделать мой профиль публичным
          </Checkbox>
          <Checkbox name='notDonor' innerRef={register}>
            Я не могу быть донором
          </Checkbox>
          <Checkbox name='temporaryRestrictions' innerRef={register}>
            Временные ограничения на сдачу крови
          </Checkbox>
        </CheckboxGroup>
        <Title as='h5' margin='10px' bold>
          Настройка уведомлений
        </Title>
        <CheckboxGroup>
          <Checkbox name='notifications.email' innerRef={register}>
            Получать уведомления на email-адрес
          </Checkbox>
          <Checkbox name='notifications.sms' innerRef={register}>
            Получать SMS-сообщения
          </Checkbox>
          <Checkbox name='notifications.telegram' innerRef={register}>
            Получать сообщения в Telegram
          </Checkbox>
        </CheckboxGroup>
        <Button type='submit' variant='outline-danger' size='lg'>
          Сохранить
        </Button>
        {status === 'error' && <Alert dismissible>{error}</Alert>}
        {status === 'success' && successMessage}
      </Form>
      <ChangePassword />
    </DashboardGrid>
  );
};

export default Settings;

const successMessage = (
  <Alert dismissible>
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

const Article = styled.article`
  margin-top: 50px;
`;
