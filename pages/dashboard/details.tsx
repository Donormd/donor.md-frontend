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
  const { bloodGroups, cities, organizations } = useAppSelector((state) => state.common);
  return (
    <DashboardGrid>
      <TitleWithArrow>Мои данные</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form>
        <FormItem label='ФИО' required>
          <Input />
        </FormItem>
        <FormItem label='Дата рождения' required>
          <DatePicker />
        </FormItem>
        <FormItem label='Группа крови' required>
          <Select size='large' placeholder='Ваша группа крови'>
            {bloodGroups.map((item) => (
              <Select.Option value={item.value}>{item.text}</Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label='Пол' required>
          <WrapperSwitch>
            <span>Мужской</span>
            <Switch />
            <span>Женский</span>
          </WrapperSwitch>
        </FormItem>
        <FormItem label='Город проживания' required>
          <Select size='large' placeholder='Город проживания'>
            {cities.map((item) => (
              <Select.Option value={item.value}>{item.text}</Select.Option>
            ))}
          </Select>
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
          <Select placeholder='Выберите вашу организацию'>
            {organizations.map((item) => (
              <Select.Option value={item.value}>{item.text}</Select.Option>
            ))}
          </Select>
        </FormItem>
        <Divider />
        <Title as='h4' margin='30px' bold>
          Ваши контакты
        </Title>
        <FormItem label='Ваш email-адрес' required>
          <Input />
        </FormItem>
        <FormItem label='Номер мобильного телефона' required>
          <Input />
        </FormItem>
        <FormItem label='Номер домашнего телефона' required>
          <Input />
        </FormItem>
        <div>
          <Title as='h5' margin='15px'>
            Моя история
          </Title>
          <Paragraph color='textMuted' margin='15px'>
            Напишите историю о том, как и почему вы решились стать донором (что для вас это значит).
            Это поможет многим людям, которые еще не определились, решиться на то, чтобы тоже стать
            донором. Если вы первый раз сдаете кровь напишите, почему вырешились сдать кровь, потом
            напишите еще!)
          </Paragraph>
        </div>
        <FormItem columns={1}>
          <TextArea rows={7} />
        </FormItem>
        <Button variant='outline-danger' size='lg'>
          Сохранить
        </Button>
      </Form>
    </DashboardGrid>
  );
};

export default MyDetails;
