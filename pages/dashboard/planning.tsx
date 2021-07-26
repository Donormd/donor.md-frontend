import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import styled from 'styled-components';

import { Alert } from '../../src/components/alert';
import DashboardButtonsLinks from '../../src/components/dashboard-buttons-links';
import SocialMediaLinks from '../../src/components/social-media-links';
import { Button, Form, FormItem, Input, Select, TitleWithArrow } from '../../src/components/UI';
import { PlanningForm } from '../../src/core/interfaces/planning';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';
import { sendPlanningForm } from '../../src/queries/dashboard/planning';
import { getOptions } from '../../src/redux/common';
import { useAppDispatch, useAppSelector } from '../../src/redux/store';

const times = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00'];

const DonationsPlanning = () => {
  const { isSuccess, mutate } = useMutation(['planning', 'form'], (data: PlanningForm) =>
    sendPlanningForm(data),
  );
  const { handleSubmit, register, control } = useForm();
  const dispatch = useAppDispatch();
  const { bloodCenter } = useAppSelector((state) => state.common);

  useEffect(() => {
    dispatch(getOptions('bloodCenter'));
  }, [dispatch]);

  const onSubmit = (data: PlanningForm) => {
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
                {bloodCenter.data?.map((item) => (
                  <Select.Option value={item._id}>{item.text}</Select.Option>
                ))}
              </Select>
            }
          />
        </FormItem>
        <FormItem
          columns={2}
          label='Дата кровосдачи'
          help={`
        Планирование донации реализовано для
        самодисциплины! Центры переливания крови работают в
        обычном режиме, но мы их проинформируем, что вы должны
        прийти в запланированный день.
        `}
        >
          <Input name='date' type='date' innerRef={register} />
        </FormItem>
        <FormItem
          columns={2}
          label='Время кровосдачи'
          help={`
        Планирование донации реализовано для
        самодисциплины! Центры переливания крови работают в
        обычном режиме, но мы их проинформируем, что вы должны
        прийти в запланированный день.
        `}
        >
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
        <ButtonsRow>
          {isSuccess && <Alert>Вы успешно запланировали донацию</Alert>}
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

const SocialButtons = styled(SocialMediaLinks)`
  margin-bottom: 0;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;
