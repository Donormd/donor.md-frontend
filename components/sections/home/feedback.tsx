import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Button, Form, FormItem, Input, TextArea, Title } from '../../UI';
import { Section } from './utils';

const Grid = styled.div`
  display: grid;

  @media (min-width: 992px) {
    grid-template-columns: 55% 45%;
    grid-column-gap: 20px;
  }
`;

const ImageWrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;

const Feedback: React.FC = (): JSX.Element => {
  return (
    <Section id='feedback'>
      <Grid>
        <div>
          <Title as='h2' className='h1' bold>
            Напишите нам
          </Title>
          <p>
            Если у вас есть вопросы по работе сервиса и предложения по его улучшению и/или видение
            нашего общего сотрудничества
          </p>
          <Form>
            <FormItem>
              <Input size='large' placeholder='Ваш email или номер телефона' />
            </FormItem>
            <FormItem columns={1}>
              <TextArea placeholder='Текст сообщения' rows={7} />
            </FormItem>
            <FormItem>
              <Button shape='round' size='large' color='red' outlined>
                Отправить
              </Button>
            </FormItem>
          </Form>
          <div>{/* Мы в социальных сетях: ссылки на соцсети */}</div>
        </div>
        <ImageWrapper>
          <Image src='/images/feedback.svg' width={300} height={300} layout='responsive' />
        </ImageWrapper>
      </Grid>
    </Section>
  );
};

export default Feedback;
