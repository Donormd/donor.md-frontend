import styled from 'styled-components';
import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Alert from '../../components/alert';
import DashboardButtonsLinks from '../../components/dashboard-buttons-links';
import SocialMediaLinks from '../../components/social-media-links';
import {
  Button,
  Form,
  FormItem,
  Input,
  TitleWithArrow,
  Select,
  DatePicker,
} from '../../components/UI';
import DashboardGrid from '../../layouts/dashboard-grid';
import { useAppSelector } from '../../redux/store';
import { getOptions } from '../../redux/common';
import { IDonation } from '../../interfaces/donation';
import { addDonationAction } from '../../redux/redusers/donation';

const Donations: FC = () => {
  const dispatch = useDispatch();
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
        <FormItem label='Номер справки' required>
          <Input name='referenceNumber' innerRef={register} />
        </FormItem>
        <FormItem label='Номер донации' required>
          <Input name='donationNumber' innerRef={register} />
        </FormItem>
        <FormItem label='Дата кровосдачи' required>
          <Controller
            name='date'
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
        <FormItem label='Место сдачи' required>
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
        <FormItem label='Ваш реципиент' help='Поле не обязательное' required>
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
          label='Загрузить справку'
          help={`
          JPG , PNG объем до 10 Мб.
          Принимаются только фотографии официальных справок установленного образца. 
          После проверки вашей донации, она появится в вашем кабинете.
          `}
          required
        >
          <Input name='referenceImg' innerRef={register} />
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
