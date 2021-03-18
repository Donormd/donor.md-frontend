import React from 'react';
import styled from 'styled-components';
import DashboardButtonsLinks from '../../components/dashboard-buttons-links';
import { Button, DatePicker, Form, FormItem, Select, TitleWithArrow } from '../../components/UI';
import DashboardGrid from '../../layouts/dashboard-grid';
import { useAppSelector } from '../../redux/store';
import SocialMediaLinks from '../../components/social-media-links';

const SocialButtons = styled(SocialMediaLinks)`
  margin-bottom: 0;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const DonationsPlanning: React.FC = (): JSX.Element => {
  const { bloodCenter } = useAppSelector((state) => state.common);
  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form>
        <FormItem label='Место сдачи'>
          <Select size='large' placeholder='Выберите место сдачи'>
            {bloodCenter.map((item) => (
              <Select.Option value={item.value}>{item.text}</Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem
          label='Дата кровосдачи'
          help={`
        Планирование донации реализовано для
        самодициплины, центры переливания крови работают в
        обычном режиме, но мы их проинформируем, что вы должны
        прийти в выбранный день.
        `}
        >
          <DatePicker />
        </FormItem>
        <FormItem
          label='Время кровосдачи'
          help={`
        Планирование донации реализовано для
        самодициплины, центры переливания крови работают в
        обычном режиме, но мы их проинформируем, что вы должны
        прийти в выбранный день.
        `}
        >
          <Select size='large'>
            <Select.Option value='8:00'>8:00</Select.Option>
            <Select.Option value='8:30'>8:30</Select.Option>
            <Select.Option value='9:00'>9:00</Select.Option>
            <Select.Option value='9:30'>9:30</Select.Option>
            <Select.Option value='10:00'>10:00</Select.Option>
            <Select.Option value='10:30'>10:30</Select.Option>
            <Select.Option value='11:00'>11:00</Select.Option>
            <Select.Option value='11:30'>11:30</Select.Option>
            <Select.Option value='12:00'>12:00</Select.Option>
          </Select>
        </FormItem>
        <ButtonsRow>
          <Button variant='outline-danger' size='lg'>
            Запланировать
          </Button>
          <SocialButtons />
        </ButtonsRow>
      </Form>
    </DashboardGrid>
  );
};

export default DonationsPlanning;
