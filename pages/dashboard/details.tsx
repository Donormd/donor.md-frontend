import React from 'react';
import styled from 'styled-components';
import DashboardButtonsLinks from '../../components/dashboard-buttons-links';
import {
  TitleWithArrow,
  Button,
  Form,
  FormItem,
  Input,
  Divider,
  TextArea,
  DatePicker,
  Checkbox,
  Title,
  Paragraph,
  Switch,
  Select,
} from '../../components/UI';
import DashboardGrid from '../../layouts/dashboard-grid';
import { useAppSelector } from '../../redux/store';

const WrapperSwitch = styled.div`
  display: flex;
  & > * {
    margin-right: 15px;
  }
`;

const MyDetails: React.FC = (): JSX.Element => {
  const { bloodGroups } = useAppSelector((state) => state.common);
  return (
    <DashboardGrid>
      <TitleWithArrow>Мои данные</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form>
        <FormItem label='ФИО' required>
          <Input />
        </FormItem>
        <FormItem label='Дата рождения'>
          <DatePicker />
        </FormItem>
        <FormItem label='Группа крови'>
          <Select placeholder='Ваша группа крови'>
            {bloodGroups.map((item) => (
              <Select.Option value={item.value}>{item.text}</Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label='Пол'>
          <WrapperSwitch>
            <span>Да</span>
            <Switch />
            <span>Нет</span>
          </WrapperSwitch>
        </FormItem>
        <FormItem label='Город проживания'>
          <Input />
        </FormItem>
        <Divider />
        <Title as='h4' margin='30px' bold>
          Корпоративное донорство
        </Title>
        <FormItem columns={1}>
          <Checkbox>
            <Paragraph as='span' size='1.2em'>
              Я участник программы корпоративное донорство
            </Paragraph>
          </Checkbox>
        </FormItem>
        <FormItem label='Выберите вашу организацию'>
          <Input />
        </FormItem>
        <Divider />
        <Title as='h4' margin='30px' bold>
          Ваши контакты
        </Title>
        <FormItem label='Ваш email-адрес'>
          <Input />
        </FormItem>
        <FormItem label='Номер мобильного телефона'>
          <Input />
        </FormItem>
        <FormItem label='Номер домашнего телефона'>
          <Input />
        </FormItem>
        <div>
          <Title as='h5' margin='15px'>
            Моя история
          </Title>
          <Paragraph color='textMuted'>
            Напишите историю о том, как и почему вы решились стать донором (что для вас это значит).
            Это поможет многим людям, которые еще не определились, решиться на то, чтобы тоже стать
            донором. Если вы первый раз сдаете кровь напишите, почему вырешились сдать кровь, потом
            напишите еще!)
          </Paragraph>
        </div>
        <FormItem columns={1}>
          <TextArea rows={7} />
        </FormItem>
        <Button shape='round' color='red' size='large' outline>
          Сохранить
        </Button>
      </Form>
    </DashboardGrid>
  );
};

export default MyDetails;
