import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Button, Form, FormItem, Input, TextArea, Title } from '../../../UI';
import { Section } from '../utils';
import { Grid, SectionParagraph, ImageWrapper, Social } from './styles';
import SocialMediaLinks from '../../../social-media-links';

const HalfWidth = styled.div`
  width: 50%;
`;

const Feedback: React.FC = (): JSX.Element => {
  return (
    <Section id='feedback' marginBottom='40px'>
      <Grid>
        <div>
          <Title as='h2' className='h1' bold>
            Напишите нам
          </Title>
          <SectionParagraph>
            Если у вас есть вопросы по работе сервиса и предложения по его улучшению и/или видение
            нашего общего сотрудничества
          </SectionParagraph>
          <Form>
            <FormItem columns={1}>
              <HalfWidth>
                <Input size='large' placeholder='Ваш email или номер телефона' />
              </HalfWidth>
            </FormItem>
            <FormItem columns={1}>
              <TextArea placeholder='Текст сообщения' rows={7} />
            </FormItem>
            <Button variant='outline-danger' size='lg'>
              Отправить
            </Button>
          </Form>
          <Social>
            <Image
              src='/images/pages/home/we-are-in-social.png'
              width={364}
              height={33}
              layout='fixed'
            />
            <SocialMediaLinks />
          </Social>
        </div>
        <ImageWrapper>
          <Image src='/images/feedback.svg' width={300} height={300} layout='responsive' />
        </ImageWrapper>
      </Grid>
    </Section>
  );
};

export default Feedback;
