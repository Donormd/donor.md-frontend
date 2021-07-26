import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Alert } from '../../src/components/alert';
import DashboardButtonsLinks from '../../src/components/dashboard-buttons-links';
import SocialMediaLinks from '../../src/components/social-media-links';
import { Button, Form, FormItem, Input, Select, TitleWithArrow } from '../../src/components/UI';
import { IDonation } from '../../src/core/interfaces/donation';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';
import { getOptions } from '../../src/redux/common';
import { addDonationAction } from '../../src/redux/redusers/donation';
import { useAppDispatch, useAppSelector } from '../../src/redux/store';

const Donations = () => {
  const dispatch = useAppDispatch();
  const { register, control, handleSubmit } = useForm();
  const { bloodCenter, transfusionCenter } = useAppSelector((state) => state.common);
  const { data: userData, status } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOptions('transfusionCenter'));
  }, [dispatch]);

  const onSubmit = (data: IDonation) => {
    if (!userData) return;
    dispatch(
      addDonationAction({
        ...data,
        userId: userData.id,
      }),
    );
  };

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem columns={2} label='Номер справки' required>
          <Input name='referenceNumber' innerRef={register} />
        </FormItem>
        <FormItem columns={2} label='Номер донации' required>
          <Input name='donationNumber' innerRef={register} />
        </FormItem>
        <FormItem columns={2} label='Дата кровосдачи' required>
          <Input name='date' type='date' />
        </FormItem>
        <FormItem columns={2} label='Место сдачи' required>
          <Controller
            name='transfusionCenterId'
            control={control}
            as={
              <Select size='large' placeholder='Выберите место сдачи'>
                {transfusionCenter.data &&
                  transfusionCenter.data.map(({ _id, text }) => (
                    <Select.Option value={_id}>{text}</Select.Option>
                  ))}
              </Select>
            }
          />
        </FormItem>
        <FormItem columns={2} label='Ваш реципиент' help='Поле не обязательное' required>
          <Controller
            name='recipientId'
            control={control}
            as={
              <Select size='large' placeholder='Выберите реципиента'>
                {bloodCenter.data &&
                  bloodCenter.data.map(({ _id, text }) => (
                    <Select.Option key={_id} value={_id}>
                      {text}
                    </Select.Option>
                  ))}
              </Select>
            }
          />
        </FormItem>
        <FormItem
          columns={2}
          label='Загрузить справку'
          help={`
          JPG , PNG объем до 10 Мб.
          Принимаются только фотографии официальных справок установленного образца. 
          После проверки вашей донации, она появится в вашем кабинете.
          `}
          required
        >
          <Input type='file' name='referenceImg' innerRef={register} />
        </FormItem>
        <ButtonsRow>
          <Button type='submit' variant='outline-danger' size='lg'>
            Добавить донацию
          </Button>
          <SocialButtons />
        </ButtonsRow>
      </Form>
      {status === 'success' && (
        <Alert dismissible>
          Спасибо, Ваша донация отправлена на проверку. Если Выправильно заполнилнили форму и
          прикрепили нужную справку,то после проверки ваша донация автоматически добавиться.Для
          проверки необходимо до 5-ти рабочих дней.Не забывайте заходить в Ваш личный кабинет.
        </Alert>
      )}
    </DashboardGrid>
  );
};

export default Donations;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const SocialButtons = styled(SocialMediaLinks)`
  margin-bottom: 0;
`;
