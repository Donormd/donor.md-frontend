import Link from 'next/link';
import styled from 'styled-components';

import {
  Button,
  Checkbox,
  Divider,
  Form,
  FormItem,
  Input,
  Select,
  StyledLink,
  TextArea,
  Title,
} from '../../src/components/UI';
import { Container } from '../../src/core/layouts/container';
import { HeaderContentFooter } from '../../src/core/layouts/header-content-footer';
import { getOptions } from '../../src/queries/common';
import { useTypedQuery } from '../../src/queries/utils';

const BecomeVolunteerPage = () => {
  const { data: cities } = useTypedQuery('cities', () => getOptions('cities'));
  const { data: typesAssistance } = useTypedQuery('cities', () => getOptions('cities'));

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
              {cities &&
                cities.map(({ text, _id }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
            </Select>
          </FormItem>
          <FormItem label='Я могу помочь'>
            <Select size='large'>
              {typesAssistance &&
                typesAssistance.map(({ text, _id }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
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

const FormItemCheckbox = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 15px;
`;
