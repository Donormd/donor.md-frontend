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
} from '../../components/UI';
import HeaderContentFooter from '../../layouts/header-content-footer';
import { Container } from '../../layouts/container';
import { useAppSelector } from '../../redux/store';

type typeData = {
  key: string | number;
  value: string;
};

const typesAssistance: Array<typeData> = [
  { key: 1, value: 'Написание статей' },
  { key: 2, value: 'SMM-помощь' },
  { key: 3, value: 'IT-помощь' },
  { key: 4, value: 'Создание роликов' },
  { key: 5, value: 'Фото помощь' },
  { key: 6, value: 'Дизайнерские услуги' },
  { key: 7, value: 'Координатор по городу' },
  { key: 8, value: 'Другое' },
];

const FormItemCheckbox = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 15px;
`;

const BecomeVolunteerPage: React.FC = (): JSX.Element => {
  const { cities } = useAppSelector((state) => state.common);
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <article>
          <Title margin='15px' bold>
            Как стать волонтером?
          </Title>
          <p>
            Мы ищем волонтёров, которым нравится концепция “Люди помогают людям” и готовы своими
            усилиями и талантами развивать донорское сообщество в Приднестровье.
          </p>
          <p>
            Наш web-сервис активно развивается и нам всегда нужны люди, которые позволят вместе
            достигать большего.
          </p>
          <p>
            Мы приглашаем в свою команду молодых журналистов, специалистов по продвижению в
            социальных сетях, дизайнеров, фото/видео специалистов, IT-специалистах front и back
            разработки со знаниями JS (React, node.js), координаторов движение в городах Республики,
            которые понимают важность развития донорского движения.
          </p>
          <p>
            Мы планируем развивать и другие социальные IT-проекты, которые позволят нам решать
            различные социальные проблемы.
          </p>
          <p>Если Вы можете помочь, заполните форму</p>
        </article>
        <Divider />
        <Form>
          <FormItem label='Фамилия и имя'>
            <Input />
          </FormItem>
          <FormItem label='Ваш email-адрес'>
            <Input />
          </FormItem>
          <FormItem label='Номер мобильного телефона'>
            <Input />
          </FormItem>
          <FormItem label='Город проживания'>
            <Select size='large'>
              {cities.map(({ key, value }) => (
                <Select.Option key={key} value={value}>
                  {value}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label='Я могу помочь'>
            <Select size='large'>
              {typesAssistance.map(({ key, value }: typeData) => (
                <Select.Option key={key} value={value}>
                  {value}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem columns={1}>
            <TextArea placeholder='Ваш комментарий' rows={5} />
          </FormItem>
          <FormItem columns={1}>
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
          <FormItem columns={1}>
            <Button variant='outline-danger' size='lg'>
              Отправить
            </Button>
          </FormItem>
        </Form>
      </Container>
    </HeaderContentFooter>
  );
};
export default BecomeVolunteerPage;
