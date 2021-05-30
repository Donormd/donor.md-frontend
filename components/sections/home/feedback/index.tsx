import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, FormItem, Input, TextArea, Title } from '../../../UI';
import { Section } from '../utils';
import { Grid, SectionParagraph, ImageWrapper, Social } from './styles';
import SocialMediaLinks from '../../../social-media-links';
import { Alert } from '../../../alert';
import { useAppSelector } from '../../../../redux/store';
import { sendFeedback, IFeedback } from '../../../../redux/redusers/feedback';
import { Loading } from '../../../UI/loading';

const Feedback: FC = () => {
  const { handleSubmit, register, reset } = useForm();

  const { status, error } = useAppSelector((state) => state.feedback);
  const dispatch = useDispatch();

  const onSubmit = (data: IFeedback) => {
    dispatch(sendFeedback(data));
    reset();
  };

  return (
    <Section id='feedback' marginBottom='40px'>
      <Grid>
        <div>
          <Title as='h2' bold>
            Напишите нам
          </Title>
          <SectionParagraph>
            Если у Вас есть вопросы по работе сервиса и предложения по его улучшению и/или видение
            нашего общего сотрудничества
          </SectionParagraph>
          <form onSubmit={handleSubmit(onSubmit)}>
            {status === 'success' && <Alert dismissible message='Спасибо что написали нам' />}
            {status === 'error' && <Alert dismissible message={error} />}
            {status === 'loading' && <Loading />}
            <FormItem columns={1}>
              <HalfWidth>
                <Input
                  name='contact'
                  innerRef={register}
                  scale='lg'
                  placeholder='Ваш email или номер телефона'
                />
              </HalfWidth>
            </FormItem>
            <FormItem columns={1}>
              <TextArea name='message' ref={register} placeholder='Текст сообщения' rows={7} />
            </FormItem>
            <Button type='submit' variant='outline-danger' size='lg'>
              Отправить
            </Button>
          </form>
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

const HalfWidth = styled.div`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    width: 50%;
  }
`;
