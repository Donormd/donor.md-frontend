import { FC } from 'react';
import styled from 'styled-components';
import {
  Button,
  Divider,
  Form,
  FormItem,
  Select,
  Title,
  TitleWithArrow,
  TextArea,
} from '../../components/UI';
import { DashboardGrid } from '../../layouts/dashboard-grid';
import { useAppSelector } from '../../redux/store';

/*
 * const marks = {
 *   0: '0',
 *   20: '1',
 *   40: '2',
 *   60: '3',
 *   80: '4',
 *   100: '5',
 * };
 */

const ReviewsAdd: FC = () => {
  const { bloodCenter } = useAppSelector((state) => state.common);
  return (
    <DashboardGrid>
      <TitleWithArrow margin='50px'>Добавить отзыв</TitleWithArrow>
      <Divider orientation='left'>
        <Title as='h5' bold>
          Оценка качества
        </Title>
      </Divider>
      <StyledForm>
        <FormItem label='Выбрать Центр крови'>
          <Select size='large' placeholder='Выбор центра'>
            {bloodCenter.data &&
              bloodCenter.data.map((item) => (
                <Select.Option value={item._id}>{item.text}</Select.Option>
              ))}
          </Select>
        </FormItem>
        <FormItem label='Отношение персонала' marginBottom='10px'>
          {/* <Slider marks={marks} step={10} defaultValue={40} /> */}
        </FormItem>
        <FormItem label='Комфортность при донации' marginBottom='10px'>
          {/* <Slider marks={marks} step={10} defaultValue={40} /> */}
        </FormItem>
        <FormItem label='Время ожидания услуги' marginBottom='10px'>
          {/* <Slider marks={marks} step={10} defaultValue={40} /> */}
        </FormItem>
        <Button variant='outline-danger' size='lg'>
          Оценить
        </Button>
      </StyledForm>
      <Form>
        <Divider>
          <Title as='h5' bold>
            Форма обратной связи
          </Title>
        </Divider>
        <FormItem label='' columns={1}>
          <TextArea rows={7} />
        </FormItem>
        <Button variant='outline-danger' size='lg'>
          Отправить
        </Button>
      </Form>
    </DashboardGrid>
  );
};

export default ReviewsAdd;

const StyledForm = styled(Form)`
  margin-top: 30px;
`;
