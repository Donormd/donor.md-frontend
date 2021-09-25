import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { DashboardButtonsLinks } from '../../components/dashboard-buttons-links';
import { SocialMediaLinks } from '../../components/social-media-links';
import { Alert } from '../../components/UI/alert';
import { Button } from '../../components/UI/button';
import { Form, FormItem } from '../../components/UI/form/form-item';
import { Input } from '../../components/UI/form/input';
import { Select } from '../../components/UI/form/select';
import { TitleWithArrow } from '../../components/UI/typography';
import { IDonation } from '../../core/interfaces/donation';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';
import { getOptions } from '../../queries/common';
import { addDonation } from '../../queries/donations';
import { getUser } from '../../queries/user';
import { useTypedMutation, useTypedQuery } from '../../queries/utils';

const Donations = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      referenceNumber: null,
      donationNumber: '',
      date: '',
      transfusionCenterId: '',
      recipientId: '',
      referenceImg: '',
    },
  });
  const { data: bloodCenter } = useTypedQuery('blood-center', () => getOptions('blood-center'));
  const { data: transfusionCenter } = useTypedQuery('transfusion-center', () =>
    getOptions('transfusion-center'),
  );
  const { data: user } = useTypedQuery('user', getUser);
  const { mutate, isSuccess, isError } = useTypedMutation('donations', (data: IDonation) =>
    addDonation(data),
  );

  const onSubmit = (data: IDonation) => {
    user?.id &&
      mutate({
        ...data,
        userId: user.id,
      });
  };

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem columns={2} label='Номер справки' required>
          <Input {...register('referenceNumber')} />
        </FormItem>
        <FormItem columns={2} label='Номер донации' required>
          <Input {...register('donationNumber')} />
        </FormItem>
        <FormItem columns={2} label='Дата кровосдачи' required>
          <Input type='date' {...register('date')} />
        </FormItem>
        <FormItem columns={2} label='Место сдачи' required>
          <Controller
            name='transfusionCenterId'
            control={control}
            render={({ field }) => (
              <Select {...field} size='large' placeholder='Выберите место сдачи'>
                {transfusionCenter?.map(({ _id, text }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
              </Select>
            )}
          />
        </FormItem>
        <FormItem columns={2} label='Ваш реципиент' help='Поле не обязательное' required>
          <Controller
            name='recipientId'
            control={control}
            render={({ field }) => (
              <Select {...field} size='large' placeholder='Выберите реципиента'>
                {bloodCenter?.map(({ _id, text }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
              </Select>
            )}
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
          <Input type='file' {...register('referenceImg')} />
        </FormItem>
        <ButtonsRow>
          <Button type='submit' variant='outline-danger' size='lg'>
            Добавить донацию
          </Button>
          <SocialButtons />
        </ButtonsRow>
      </Form>
      {isSuccess && (
        <Alert dismissible>
          Спасибо, Ваша донация отправлена на проверку. Если Выправильно заполнилнили форму и прикрепили
          нужную справку,то после проверки ваша донация автоматически добавиться.Для проверки необходимо до
          5-ти рабочих дней.Не забывайте заходить в Ваш личный кабинет.
        </Alert>
      )}
      {isError && <Alert dismissible>Что-то пошло не так</Alert>}
    </DashboardGrid>
  );
};

export default Donations;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const SocialButtons = styled(SocialMediaLinks)`
  margin-bottom: 0;
`;
