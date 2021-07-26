import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { IReview } from '../../../core/interfaces/review';
import { getOptions } from '../../../redux/common';
import { createReviewAction } from '../../../redux/redusers/review';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { Alert } from '../../alert';
import { Button, Divider, Form, FormItem, Select, Slider, TextArea, Title } from '../../UI';

const marks = {
  0: '0',
  20: '1',
  40: '2',
  60: '3',
  80: '4',
  100: '5',
};

const formatter = (value?: number) => value && `${((5 / 100) * value).toFixed(1)}`;

export const ReviewForm = () => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, register } = useForm();

  const { data, status: bloodStatus } = useAppSelector((state) => state.common.bloodCenter);
  const { status, error: reviewError } = useAppSelector((state) => state.review);

  useEffect(() => {
    dispatch(getOptions('bloodCenter'));
  }, [dispatch]);

  const onSubmit = (data: IReview) => {
    const sendData = Object.entries(data).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: typeof value === 'number' ? Math.round(value / 25) : value,
      };
    }, {} as IReview);
    dispatch(createReviewAction(sendData));
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
      {status === 'error' && <Alert dismissible>{reviewError}</Alert>}
      {status === 'success' && <Alert dismissible>Спасибо что оставили отзыв</Alert>}
    </FormWrapper>
  );
};

const FormWrapper = styled(Form)`
  margin-top: 30px;
`;
