import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Alert } from '../../src/components/alert';
import { DashboardButtonsLinks } from '../../src/components/dashboard-buttons-links';
import { SocialMediaLinks } from '../../src/components/social-media-links';
import { Button, Form, FormItem, Input, Select, TitleWithArrow } from '../../src/components/UI';
import { IDonation } from '../../src/core/interfaces/donation';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';
import { getOptions } from '../../src/queries/common';
import { addDonation } from '../../src/queries/donations';
import { getUser } from '../../src/queries/user';
import { useTypedMutation, useTypedQuery } from '../../src/queries/utils';

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
  const { data: bloodCenter } = useTypedQuery('bloodCenter', () => getOptions('bloodCenter'));
  const { data: transfusionCenter } = useTypedQuery('transfusionCenter', () =>
    getOptions('transfusionCenter'),
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
          <Input name='referenceNumber' ref={register} />
        </FormItem>
        <FormItem columns={2} label='Номер донации' required>
          <Input name='donationNumber' ref={register} />
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
                {transfusionCenter &&
                  transfusionCenter.map(({ _id, text }) => (
                    <Select.Option key={_id} value={_id}>
                      {text}
                    </Select.Option>
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
                {bloodCenter &&
                  bloodCenter.map(({ _id, text }) => (
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
          <Input type='file' name='referenceImg' ref={register} />
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
