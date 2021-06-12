import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Alert } from '../components/alert';
import { Button, Divider, FormItem, Input, Paragraph, Title } from '../components/UI';
import { Loading } from '../components/UI/loading';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { getData, IMonitoring, sendData } from '../redux/redusers/monitoring';
import { useAppDispatch, useAppSelector } from '../redux/store';

const Monitoring = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const { action, values } = useAppSelector((state) => state.monitoring);

  useEffect(() => {
    if (!values.data) {
      dispatch(getData());
    }
  }, [dispatch, values.data]);
  const { status, error } = action;

  const onSubmit = (data: any) => {
    if (!values.data) return;
    const prepareData: IMonitoring = {
      _id: values.data._id,
      fullname: data.fullname,
      values: data,
    };
    dispatch(sendData(prepareData));
  };

  return (
    <HeaderContentFooter background='/images/pages/love-pic.png'>
      <Container>
        <Article>
          <Title margin='15px' bold>
            Для сотрудников центра крови
          </Title>
          <Paragraph>
            Заполните пожалуйста форму для отбражение мониторинга запасов крови. Ввод данных по
            эритроцитарной массе
          </Paragraph>
        </Article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='Ваша Фамилия и Имя' columns={2}>
            <Input name='fullname' innerRef={register} />
          </FormItem>
          <FormItem help='Дата указывается автоматически' label='Дата ввода информации' columns={2}>
            <Input placeholder='Дата указывается автоматически' disabled />
          </FormItem>
          <StyledDivider />
          <Paragraph align='left'>
            Ввод данных для монитора крови из остатков запаса по дозам эритроцитарной массы.
          </Paragraph>
          <TableForm>
            <Row>
              <div>&nbsp;</div>
              <Title as='h5' bold align='center'>
                O(I)
              </Title>
              <Title as='h5' bold align='center'>
                A(II)
              </Title>
              <Title as='h5' bold align='center'>
                В(III)
              </Title>
              <Title as='h5' bold align='center'>
                AB(IV)
              </Title>
            </Row>
            <Row>
              <Paragraph bold align='left'>
                Положительная (+)
              </Paragraph>
              <Input type='number' name='O(I)+' innerRef={register} />
              <Input type='number' name='A(II)+' innerRef={register} />
              <Input type='number' name='B(III)+' innerRef={register} />
              <Input type='number' name='AB(IV)+' innerRef={register} />
            </Row>
            <Row>
              <Paragraph bold align='left'>
                Отрицательная (-)
              </Paragraph>
              <Input type='number' name='O(I)-' innerRef={register} />
              <Input type='number' name='A(II)-' innerRef={register} />
              <Input type='number' name='B(III)-' innerRef={register} />
              <Input type='number' name='AB(IV)-' innerRef={register} />
            </Row>
          </TableForm>
          <Button type='submit' variant='outline-danger' size='lg'>
            Сохранить данные
          </Button>
          {status === 'loading' && <Loading />}
          {status === 'error' && <Alert dismissible>{error}</Alert>}
        </form>
      </Container>
    </HeaderContentFooter>
  );
};

export default Monitoring;

const TableForm = styled.div`
  margin: 50px 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 22vh 1fr 1fr 1fr 1fr;
  column-gap: 15px;
  margin-bottom: 15px;

  &:first-child {
    text-align: left;
  }
`;

const Article = styled.div`
  margin-bottom: 50px;
`;

const StyledDivider = styled(Divider)`
  margin: 50px 0;
`;
