import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { DashboardButtonsLinks } from '../../components/dashboard-buttons-links';
import { SocialMediaLinks } from '../../components/social-media-links';
import { Alert } from '../../components/UI/alert';
import { Button } from '../../components/UI/button';
import { Form, FormItem } from '../../components/UI/form/form-item';
import { Input } from '../../components/UI/form/input';
import { Select } from '../../components/UI/form/select';
import { Paragraph, TitleWithArrow } from '../../components/UI/typography';
import { prepareError } from '../../core/helpers/prepare-data';
import { IPlanning } from '../../core/interfaces/planning';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';
import { getOptions } from '../../queries/common';
import { createPlanning } from '../../queries/planning';
import { useTypedMutation, useTypedQuery } from '../../queries/utils';

const times = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00'] as const;

const DonationsPlanning = () => {
  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      bloodCenterId: null,
      date: new Date().toISOString(),
      time: '8:00',
    },
  });
  const { data: transfusionCenter } = useTypedQuery('transfusion-center', () =>
    getOptions('transfusion-center'),
  );
  const { mutate, isSuccess, isError, error } = useTypedMutation('planning', (data: IPlanning) =>
    createPlanning(data),
  );

  const onSubmit = (data: IPlanning) => {
    mutate(data);
  };

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem columns={2} label='Место сдачи'>
          <Controller
            name='bloodCenterId'
            control={control}
            as={
              <Select size='large' placeholder='Выберите место сдачи'>
                {transfusionCenter &&
                  transfusionCenter.map((item) => (
                    <Select.Option value={item._id}>{item.text}</Select.Option>
                  ))}
              </Select>
            }
          />
        </FormItem>
        <FormItem columns={2} label='Дата кровосдачи'>
          <Input name='date' type='date' ref={register} />
        </FormItem>
        <FormItem columns={2} label='Время кровосдачи'>
          <Controller
            name='time'
            control={control}
            as={
              <Select size='large'>
                {times.map((time) => (
                  <Select.Option value={time}>{time}</Select.Option>
                ))}
              </Select>
            }
          />
        </FormItem>
        <Paragraph color='textMuted'>
          Планирование донации реализовано для самодисциплины! Центры переливания крови работают в обычном
          режиме, но мы их проинформируем, что вы должны прийти в запланированный день.
        </Paragraph>
        {isSuccess && <Alert>Вы успешно запланировали донацию</Alert>}
        {isError && <Alert>{prepareError(error)}</Alert>}
        <ButtonsRow>
          <Button type='submit' variant='outline-danger' size='lg'>
            Запланировать
          </Button>
          <SocialButtons />
        </ButtonsRow>
      </Form>
    </DashboardGrid>
  );
};

export default DonationsPlanning;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const SocialButtons = styled(SocialMediaLinks)`
  margin-bottom: 0;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;
