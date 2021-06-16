import { Slider } from 'antd';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Alert } from '../../components/alert';
import {
  Button,
  Divider,
  Form,
  FormItem,
  Paragraph,
  Select,
  TextArea,
  Title,
  TitleWithArrow,
} from '../../components/UI';
import { IReview } from '../../core/interfaces/review';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';
import { getOptions } from '../../redux/common';
import { createReviewAction } from '../../redux/redusers/review';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const marks = {
  0: '0',
  20: '1',
  40: '2',
  60: '3',
  80: '4',
  100: '5',
};

const formatter = (value?: number) => value && `${((5 / 100) * value).toFixed(1)}`;

const ReviewsAdd = () => {
  const dispatch = useAppDispatch();

  const { control, handleSubmit, register } = useForm();
  const { data, status: bloodStatus, error } = useAppSelector((state) => state.common.bloodCenter);

  useEffect(() => {
    dispatch(getOptions('bloodCenter'));
  }, [dispatch]);

  const onSubmit = (data: IReview) => {
    dispatch(createReviewAction(data));
  };

  return (
    <DashboardGrid>
      <TitleWithArrow margin='50px'>Добавить отзыв</TitleWithArrow>
      <Paragraph>
        На этой странице вы можете оставить отзыв, написать вопрос и оценить качество работы службы
        переливания крови.
      </Paragraph>
      <Divider orientation='left'>
        <Title as='h5' bold>
          Оценка качества
        </Title>
      </Divider>
      {bloodStatus === 'error' ? (
        <Alert>{error}</Alert>
      ) : (
        <ReviewForm onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='Выбрать Центр крови' columns={2}>
            <Controller
              name='bloodCenterId'
              control={control}
              render={(props) => (
                <Select
                  size='large'
                  placeholder='Выбор центра'
                  loading={bloodStatus === 'loading'}
                  {...props}
                >
                  {data.length &&
                    data.map((item) => <Select.Option value={item._id}>{item.text}</Select.Option>)}
                </Select>
              )}
            />
          </FormItem>
          <FormItem label='Отношение персонала' marginBottom='10px' columns={2}>
            <Controller
              defaultValue={100}
              name='staffAttitude'
              control={control}
              render={(props) => (
                <Slider
                  {...props}
                  marks={marks}
                  step={10}
                  defaultValue={100}
                  tipFormatter={formatter}
                />
              )}
            />
          </FormItem>
          <FormItem label='Комфортность при донации' marginBottom='10px' columns={2}>
            <Controller
              defaultValue={100}
              name='comfortableDonation'
              control={control}
              render={(props) => (
                <Slider
                  {...props}
                  marks={marks}
                  step={10}
                  defaultValue={100}
                  tipFormatter={formatter}
                />
              )}
            />
          </FormItem>
          <FormItem label='Время ожидания услуги' marginBottom='10px' columns={2}>
            <Controller
              defaultValue={100}
              name='waitingTime'
              control={control}
              render={(props) => (
                <Slider
                  {...props}
                  marks={marks}
                  step={10}
                  defaultValue={100}
                  tipFormatter={formatter}
                />
              )}
            />
          </FormItem>
          <Divider>
            <Title as='h5' bold>
              Форма обратной связи
            </Title>
          </Divider>
          <FormItem columns={1}>
            <TextArea
              placeholder='Нам очень важно знать мнение каждого донора'
              rows={7}
              name='message'
              ref={register({ required: true })}
            />
          </FormItem>
          <Button variant='outline-danger' size='lg' type='submit'>
            Отправить
          </Button>
        </ReviewForm>
      )}
    </DashboardGrid>
  );
};

export default ReviewsAdd;

const ReviewForm = styled(Form)`
  margin-top: 30px;
`;
