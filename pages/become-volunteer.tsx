import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  Title,
  Divider,
  Form,
  FormItem,
  Input,
  TextArea,
  Select,
  Checkbox,
  StyledLink,
  Button,
} from '../components/UI';
import HeaderContentFooter from '../layouts/header-content-footer';
import { Container } from '../layouts/container';

type typeData = {
  key: string | number;
  value: string;
};

const cityes: Array<typeData> = [
  { key: 1, value: 'Тирасполь' },
  { key: 2, value: 'Бендеры' },
  { key: 3, value: 'Рыбница' },
  { key: 4, value: 'Слободзея' },
  { key: 5, value: 'Днестровск' },
  { key: 6, value: 'Дубосары' },
  { key: 7, value: 'Каменка' },
];

const typesAssistance: Array<typeData> = [
  { key: 1, value: 'Написание статьей' },
  { key: 2, value: 'SMM-помощь' },
  { key: 3, value: 'IT-помощь' },
  { key: 4, value: 'Создание роликов' },
  { key: 5, value: 'Фото помощь' },
  { key: 6, value: 'Дизайнерские услуги' },
  { key: 7, value: 'Координатор по городу' },
  { key: 8, value: 'Другое' },
];

const StyledTitle = styled(Title)`
  margin-bottom: 25px;
`;

const FormItemCheckbox = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 15px;
`;

const BecomeVolunteerPage: React.FC = (): JSX.Element => (
  <HeaderContentFooter background='/images/pages/articles/welcome.png'>
    <Container>
      <article>
        <StyledTitle bold>Как стать волонтером?</StyledTitle>
        <p>
          Мы ищем волонтёров, которым нравится концепция “Люди помогают людям” и готовы своими
          усилиями и талантами развивать донорское сообщество в Приднестровье.
        </p>
        <p>
          Наш web-сервис активно развивается и нам всегда нужны люди, которые позволят вместе
          достигать большего.
        </p>
        <p>
          Мы приглашаем в свою команду молодых журналистов, специалистов по продвижению в социальных
          сетях, дизайнеров, фото/видео специалистах, IT-специалистах front и back разработки со
          знаниями JS (React, Vue.js), Python (Django), людей, которые понимают важность развития
          донорского движения.
        </p>
        <p>
          Мы планируем развивать и другие социальные IT-проекты, которые позволят нам решать
          различные социальные проблемы.
        </p>
        <p>Если Вы можете помочь, заполните форму</p>
      </article>
      <Divider />
      <Form>
        <FormItem
          label='Фамилия и имя'
          name='name'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label='Ваш email-адрес'
          name='email'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label='Номер мобильного телефона'
          name='phone'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label='Должность'
          name='position'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label='Город проживания'
          name='city'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Select>
            {cityes.map(({ key, value }: typeData) => (
              <Select.Option key={key} value={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem
          label='Я могу помочь'
          name='typeOfAssistance'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Select>
            {typesAssistance.map(({ key, value }: typeData) => (
              <Select.Option key={key} value={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem columns={1} name='comment'>
          <TextArea placeholder='Ваш комментарий' rows={5} />
        </FormItem>
        <FormItem>
          <FormItemCheckbox>
            <Checkbox checked />
            <p>
              Согласен с{' '}
              <Link href='/'>
                <StyledLink color='black' bold underline>
                  правилами
                </StyledLink>
              </Link>{' '}
              обработки персональных данных
            </p>
          </FormItemCheckbox>
        </FormItem>
        <FormItem>
          <Button size='large' shape='round' color='red'>
            Отправить
          </Button>
        </FormItem>
      </Form>
    </Container>
  </HeaderContentFooter>
);

export default BecomeVolunteerPage;
